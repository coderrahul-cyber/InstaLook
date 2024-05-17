
const express = require('express');
const router = express();


router.get('/' , (req,res)=>{
    res.render("login");
})
router.get('/feed' , (req,res)=>{
    res.render("feed")
})

module.exports = router ;