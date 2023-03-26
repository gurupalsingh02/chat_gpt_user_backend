const {Schema} = require('mongoose');
const messageSchema = new Schema({
    message:{
        type:String,
        required:true,
    },
    chatIndex:{
        type:Int32Array,
        required:true,
    }
});
module.exports = messageSchema;