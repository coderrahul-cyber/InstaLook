const express = require('express');
const userModel = require('../models/userModel');
const router =express();


router.get('/', async (req, res) => {
    try {
        const user = await userModel.findOne({ username: req.user.username }).populate('posts');

        // Convert each post's data buffer to a base64-encoded string
        const posts = user.posts.map(post => {
            const base64Data = post.data.toString('base64');
            return {
                ...post.toObject(),
                base64Data
            };
        });

        res.render('profile', { user: { ...user.toObject(), posts } });
    } catch (error) {
        console.error('Error rendering profile:', error);
        res.status(500).send('Internal Server Error');
    }
});


router.get("/feed" , (req,res)=>{

    res.render("feed");
});

router.get("/discover" , (req,res)=>{

    res.render("discover");
});


router.get('/other' , (req,res)=>{
    res.render("profileO")
})




module.exports = router ;





