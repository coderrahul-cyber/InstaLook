require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_S);

const userSchema = mongoose.Schema({
    username : {
        type : String ,
        required : [true , "Please enter the Username"],
        unique : true 
    },
    email : {
        type : String,
        required : [true , "Please Enter the email"]
    },
     fullName: {
        type : String,
        required : [true , "Please Enter the Name"]
    },
    bio: {
       type : String,
    }
    ,
    password : {
        type : String ,
        required : [true , "Please Enter the password"]
    },
    dp : {
        type : String ,
        default : "./public/img/default/default.png"
    },
    posts: [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "UpostData"
        }
    ]
});


module.exports = mongoose.model("userData" , userSchema);

