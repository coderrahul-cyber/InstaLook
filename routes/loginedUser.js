const express = require('express');
const router =express();


router.get("/" , (req,res)=>{
    res.render("profile");
});

router.get("/feed" , (req,res)=>{

    res.render("feed");
});

router.get("/discover" , (req,res)=>{

    res.render("discover");
});





module.exports = router ;





