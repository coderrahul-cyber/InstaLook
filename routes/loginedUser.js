const express = require('express');
const userModel = require('../models/userModel');
const router =express();
const findingUser = require('../utility/findingUser')
const dp = require('../utility/dpFinder')






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


router.get("/feed", async (req, res) => {
    try {
        const user = await findingUser(req.user.username);
        
        if (user && user.dp) {
            const { base64Data, contentType } = dp(user); // function for the dp
            res.render("feed", { user, base64Data , contentType}); 
        } else {
            res.render("feed", { user });
        }
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






module.exports = router ;





