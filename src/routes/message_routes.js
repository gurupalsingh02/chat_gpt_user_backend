const router = require('express').Router();
const mongoose = require('mongoose');
const userModel = require('../models/user_model');

router.post('/',async (req,res)=>{
    const userId = req.body.userId;
    const messageSchema = require('../models/message_model');
    const messageModel = mongoose.model(userId,messageSchema);
    const message = new messageModel({
        "message":req.body.message,
        "chatIndex":req.body.chatIndex
    });
    await message.save();
});