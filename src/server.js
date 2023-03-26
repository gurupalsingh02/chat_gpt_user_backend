const express = require('express');
const body_parser = require('body-parser');
const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gurupalsingh83:1234@cluster0.n47w0wj.mongodb.net/chat_gpt_clone').then(() => {
    console.log('connected');
    app.get('/', (req, res) => {
        res.send('ecommerce setup');
    });
    const userRoutes = require('./routes/user_routes');
    app.use('/api/user', userRoutes);
    const messageRoutes = require('./routes/message_routes');
    app.use('/api/message', userRoutes);

});
const PORT = 3000;
app.listen(PORT, function () {
    console.log(`server url is http://localhost:${PORT}`);
});