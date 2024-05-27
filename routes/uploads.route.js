const express = require('express');
const router = express();
const userModel = require('../models/userModel');
const postModel = require('../models/postModel');
const multer = require('multer');
const upload = multer({storage : multer.memoryStorage()});

router.post('/',upload.single('file') , async (req,res)=>{
    // res.send("Done the post")
    const caption = req.body.caption ;
    const user = await userModel.findOne({username : req.user.username});

    let post = await postModel.create({
           userId : user._id ,
            caption: caption ,
            name : req.file.originalname ,
            data : req.file.buffer,
            content_type : req.file.mimetype
    });

    user.posts.push(post._id);
    await user.save();

    res.redirect('/user');

})


router.post('/updatedp', upload.single('file'), async (req, res) => {
        try {
            // Ensure that the user is logged in
            if (!req.user || !req.user.username) {
                return res.status(401).json({ error: "Unauthorized access" });
            }
    
            // Update user's profile picture
            const user = await userModel.findOneAndUpdate(
                { username: req.user.username },
                { dp: req.file.buffer, content_type: req.file.mimetype },
                { new: true }
            );
    
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
    
            console.log("Profile picture updated");
            return res.redirect("/user/edit");
        } catch (error) {
            console.error("Error updating profile picture:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });






module.exports = router ;