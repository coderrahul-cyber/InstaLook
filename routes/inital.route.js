require("dotenv").config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel');
const router = express();
const jwtS = process.env.JWT_SECERT ;

const generateToken = (username)=>{
  return  jwt.sign({username} , jwtS , {expiresIn : '1hr'})
} ;


router.get('/' , (req,res)=>{
    res.render("login");
});

router.get('/register' , (req,res)=>{
    res.render("register");
});

router.post('/newUser' , async (req,res ,next)=>{
 try {
    const {username , name , email , password} = req.body ;
    const existingUser = await userModel.findOne({username});
    if(existingUser){
        req.flash("error_msg","Username already exist");
      return  res.redirect("/register")
    } 

    bcrypt.genSalt(10 , (err , salt)=>{
        bcrypt.hash(password , salt , async (err , hash)=>{
            const newUser = await userModel.create({
                username ,
                email,
                fullName : name ,
                password : hash 
            })
        })
    })

    let token =  await generateToken(username);

       res.cookie("token" , token , {httpOnly : true}) ;

       res.redirect("/user/feed");
    

 }catch(err){
  next(err);
 }


});

router.post('/login' , async (req,res,next)=>{
    try{
       const {username , password} = req.body ;
       const findingUser = await userModel.findOne({username});
       if(!findingUser){
        req.flash("error_msg","Incorrect detail");
        return res.redirect('/');
       }
       const verfiyingPassword = await bcrypt.compare(password , findingUser.password);
       if(!verfiyingPassword){
        req.flash("error_msg","Incorrect detail");
        return res.redirect('/');
       }
       let token = generateToken(username);
       res.cookie("token" , token , {httpOnly : true});
       res.redirect('/user/feed');
    }catch(err){
        next(err);
    }
});

router.get('/logout', (req,res)=>{
    res.clearCookie("token");
    res.redirect('/');
});





module.exports = router ;