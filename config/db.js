const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb+srv://gurupalsingh83:1234@cluster0.n47w0wj.mongodb.net/userdata').on('open',()=>{
    console.log('connection established');
    }).on('error',()=>{
        console.log('connection failed');
});
module.exports = connection;