const mongoose = require('mongoose');
const db = require('../config/db');
const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});
const userModel = db.model('user',UserSchema);
module.exports = userModel;