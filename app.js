const express = require('express');
const body_parser = require('body-parser');
const userRoutes = require('./routers/user_router');
const app = express();
app.use(body_parser.json());
app.use('/',userRoutes);
module.exports = app;