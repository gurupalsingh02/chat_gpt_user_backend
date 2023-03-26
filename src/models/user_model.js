const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required: true,
    },
});
const userModel = new model("user",userSchema);

module.exports = userModel;