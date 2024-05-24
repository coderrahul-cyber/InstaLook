require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_S);

const Postschema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userData"
    },
    likes : [
        {
          type : mongoose.Schema.Types.ObjectId ,
          ref : "userData"
        }
    ],
    caption : {
        type : String ,
        default : ""
    },

});

module.exports = mongoose.model("UpostData" , Postschema );