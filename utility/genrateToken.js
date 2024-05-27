require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtS = process.env.JWT_SECERT ;


const generateToken = (username)=>{
    return  jwt.sign({username} , jwtS , {expiresIn : '1hr'})
  } ;

module.exports = generateToken ;