const router = require('express').Router();
const mongoose = require('mongoose');
const userModel = require('../models/user_model');
const { route } = require('./user_routes');

router.post('/sendmessage', async (req, res) => {
    try {
        const userId = req.body.userId;
        const messageSchema = require('../models/message_model');
        const messageModel = mongoose.model(userId, messageSchema);
        const message = new messageModel({
            "message": req.body.message,
            "chatIndex": req.body.chatIndex,
            "time": req.body.time
        });
        await message.save();
        res.json({ success: true, message: 'message sent successfully' });
    } catch (e) {
        res.json({ success: true, message: e.message });
    }
});

router.post('/getmessages', async (req, res) => {
    try {
        const userId = req.body.userId;
        const messageSchema = require('../models/message_model');
        const messageModel = mongoose.model(userId, messageSchema);
        const messages = await messageModel.find({}).sort({ time: 1});
        res.json({ success: true, message: messages });
        
    } catch (e) {
        res.json({ success: true, message: e.message });
    }
});
module.exports = router;