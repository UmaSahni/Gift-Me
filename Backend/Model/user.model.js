const mongoose = require('mongoose')

const Userscheme = mongoose.Schema({
    name: {required:true, type:String},
    email:{required:true, type:String},
    password:{required:true, type:String}
},{
    versionKey: false,
  })  

const UserModel = mongoose.model("user", Userscheme)

module.exports = {UserModel}