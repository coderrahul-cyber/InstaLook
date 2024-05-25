require("dotenv").config();
const express = require('express');
const app= express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const jwt = require("jsonwebtoken");
const path = require('path');

const jwtS = process.env.JWT_SECERT ;
const port = process.env.PORT ;

const loggedInUser = require('./routes/loginedUser');
const indexRoute = require('./routes/inital.route');
const uploadRoute = require('./routes/uploads.route');

const { error } = require("console");

//session setup for the flash
app.use(session({
    secret: jwtS, 
    resave: false,
    saveUninitialized: true,
}));

app.use(flash());

// middleware for the flash
app.use((req, res, next) => {
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// verfiying the user for the protected routes
const isloggedIn = (req, res, next)=>{
    const token = req.cookies.token ;
    // console.log(token);
    if(!token){
        // res.status(403).json({error :  "Access denied plaese login first"});
      return res.status(403).render("verifyError");
    }
    jwt.verify(token , jwtS , (err, decoded)=>{
        if(err){
            // return res.status(403).json({error : "Sorry your to authoriazt to view this page"});
         return res.status(403).render("verifyError");  
        }
        req.user = decoded ;
        next();
    })
}


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));

app.use("/" , indexRoute);
app.use("/user", isloggedIn, loggedInUser);
app.use("/upload", isloggedIn, uploadRoute);


// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  
app.listen(port , ()=>{
    console.log(`App is running on http://localhost:${port}`);
})