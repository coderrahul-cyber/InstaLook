require("dotenv").config();
const jwtS = process.env.JWT_SECERT ;
const express = require('express');
const router = express();
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const postModel = require('../models/postModel');
const multer = require('multer');
const upload = multer({storage : multer.memoryStorage()});

const generateToken = (username)=>{
    return  jwt.sign({username} , jwtS , {expiresIn : '1hr'})
  } ;

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
    
        
            return res.redirect("/user/edit");
        } catch (error) {
            console.error("Error updating profile picture:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });

    router.post('/detail', async (req, res) => {
        try {
            let update = {};
            if (req.body.bio && req.body.bio.trim() !== "") {
                update.bio = req.body.bio;
            }
            if (req.body.username && req.body.username.trim() !== "") {
                update.username = req.body.username;
            }
            if (req.body.name && req.body.name.trim() !== "") {
                update.fullName = req.body.name;
            }
    
            // Check if the new username already exists
            if (update.username && update.username !== req.user.username) {
                const existingUser = await userModel.findOne({ username: update.username });
                if (existingUser) {
                    req.flash("error_msg", "Username already taken!");
                    return res.redirect('/user/edit');
                }
            }
    
            const user = await userModel.findOneAndUpdate({ username: req.user.username }, update, { new: true });
            // here we are clearing the token/cookie from the client and updating with new as we have set the cookie from username 
            res.clearCookie("token");
    
            // Generate a new JWT with the updated username
            const token = generateToken(user.username);
            res.cookie("token", token, { httpOnly: true });
    
            res.redirect('/user');
        } catch (error) {
            console.error("Error updating user details:", error);
            req.flash("error_msg", "An error occurred while updating details.");
            res.redirect('/user/edit');
        }
    });





module.exports = router ;