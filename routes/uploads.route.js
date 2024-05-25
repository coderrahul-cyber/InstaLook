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






module.exports = router ;