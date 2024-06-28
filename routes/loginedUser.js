const express = require('express');
const userModel = require('../models/userModel');
const postModel = require('../models/postModel');
const router =express();
const findingUser = require('../utility/findingUser')
const dp = require('../utility/dpFinder');
const randomNum = require("../utility/randomnumber");
const random = require('../utility/randomnumber');






router.get('/', async (req, res) => {
    try {
        const user = await findingUser(req.user.username);

        // Convert each post's data buffer to a base64-encoded string
        const posts = user.posts.map(post => {
            const base64Datas = post.data.toString('base64');
            return {
                ...post.toObject(),
                base64Datas
            };
        });

        if (user && user.dp) {
            const {base64Data , contentType} = dp(user);
            res.render('profile', { user: { ...user.toObject(), posts   } , base64Data , contentType });
        } else {
            res.render('profile', { user: { ...user.toObject(), posts } });

        }

    } catch (error) {
        console.error('Error rendering profile:', error);
        res.status(500).send('Internal Server Error');
    }
});




// router.get("/feed", async (req, res) => {
//     try {
//         const user = await findingUser(req.user.username);

//         const posts = await postModel.find({}).populate("userId");

//         // Convert each post's data buffer to a base64-encoded string
//         const formattedPosts = posts.map(post => {
//             const base64Data = post.data.toString('base64');
//             let userDp = null;
//             let userContentType = null;

//             if (post.userId && post.userId.dp) {
//                 userDp = post.userId.dp.toString('base64');
//                 userContentType = post.userId.content_type || 'image/jpeg';
//             }
            

//             return {
//                 ...post.toObject(),
//                 base64Data,
//                 contentType: post.content_type || 'image/jpeg',
//                 userDetails: {
//                     dp: userDp,
//                     contentType: userContentType,
//                     fullName: post.userId ? post.userId.fullName : 'Unknown User'
//                 }
//             };
//         });

//         if (user && user.dp) {
//             const { base64Data, contentType } = dp(user);
//             res.render("feed", { user, base64Data, contentType, posts: formattedPosts });
//         } else {
//             res.render("feed", { user, posts: formattedPosts });
//         }
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

//for random data
router.get("/feed", async (req, res) => {
    try {
        const user = await findingUser(req.user.username);



        const randomPosts = await postModel.aggregate([
            { $sample: { size: 14 } },
            {
                $lookup: {
                    from: "userdatas", // Assuming the user collection name is 'userdatas'
                    localField: "userId",
                    foreignField: "_id",
                    as: "userDetails"
                }
            }
        ]);

        // Convert each post's data buffer to a base64-encoded string and ensure user details are included
        const posts = randomPosts.map(post => {
            const base64Data = post.data.toString('base64');
            return {
                ...post,
                base64Data,
                contentType: post.content_type || 'image/jpeg',
                userDetails: post.userDetails[0] // assuming userDetails array contains one user object
            };
        });

        let base64Data, contentType;
        if (user && user.dp) {
            const dpData = dp(user); // Function for the dp
            base64Data = dpData.base64Data;
            contentType = dpData.contentType;
        }

            const all = await userModel.find({_id : {$ne : user._id}});
        const randomNum = random ;

        res.render("feed", {all, randomNum, user, base64Data, contentType, posts });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
});








router.get("/discover" , async (req,res)=>{
    try {
        const user = await findingUser(req.user.username);
        
        if (user && user.dp) {
            const {base64Data , contentType} = dp(user);
            res.render("discover", { user, base64Data, contentType });
        } else {
            res.render("discover", { user });
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
});


router.get('/other' , async (req,res)=>{
    try {
        const user = await findingUser(req.user.username);
        
        if (user && user.dp) {
            const {base64Data , contentType} = dp(user);
            res.render("profileO", { user, base64Data, contentType });
        } else {
            res.render("profileO", { user });
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/edit" , async (req,res)=>{
    try {
        const user = await findingUser(req.user.username);
        
        if (user && user.dp) {
            const {base64Data , contentType} = dp(user);
            res.render("edit", { user, base64Data, contentType });
        } else {
            res.render("edit", { user });
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
    
});


router.get('/like/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postModel.findById(id);
        const loggedInUser = await userModel.findOne({ username: req.user.username });

        if (!loggedInUser) return res.redirect('/');
        if (!post) return res.status(404).send('Post not found');

        const userId = loggedInUser._id;

        if (post.likes.includes(userId)) {
            // User has already liked the post, so unlike it
            post.likes.pull(userId);
        } else {
            // User has not liked the post, so like it
            post.likes.push(userId);
        }

        await post.save();
        res.redirect('/user/feed');
        // If you want to use AJAX, you can return a JSON response instead
        // res.json({ success: true, likes: post.likes.length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});






module.exports = router ;





