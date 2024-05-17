require("dotenv").config();
const express = require('express');
const app= express();
const cookieParser = require('cookie-parser');
const path = require('path');


const port = process.env.PORT ;

const indexRoute = require('./routes/inital.route');



app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));

app.use("/" , indexRoute);



app.listen(port , ()=>{
    console.log(`App is running on http://localhost:${port}`);
})