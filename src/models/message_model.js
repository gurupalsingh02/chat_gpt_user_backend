const {Schema} = require('mongoose');
const messageSchema = new Schema({
    message:{
        type:String,
        required:true,
    },
    chatIndex:{
        type:Number,
        required:true,
    },
    time:{
        type:Number,
        required:true,
    }
});
module.exports = messageSchema;