const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

     name:{
    type:String,
    required:[true,"name is require"]
      },

      hospital:{
    type:String,
    required:[true,"hospital is require"]
      },

       

     email:{
    type:String,
    required:[true,"email is require"]
     },

      password:{
    type:String,
    required:[true,"password is require"]
     },

});

const docModel = mongoose.model("docregister",userSchema);

module.exports =docModel;