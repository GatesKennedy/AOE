const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

//  initialize aoe variable
const aoe = express();
//  Connect Database
connectDB();

//  Init Middleware
aoe.use(express.json({
    extended: false
}));

//  Define Routes
aoe.use('/api/auth', require('./AOE_Util/api/auth'));
aoe.use('/api/posts', require('./AOE_Util/api/posts'));
aoe.use('/api/profile', require('./AOE_Util/api/profile'));
aoe.use('/api/users', require('./AOE_Util/api/users'));
aoe.use('/api/Open', require('./AOE_Util/api/open'));

//  initialze environment variable || default value = 5000
const PORT = process.env.PORT || 5000;
//  callback: console.log for connection
aoe.listen(PORT, () => console.log(`MSG: Server started on port ${PORT}`));

//  Input Validation 
const valid = require('validator');
//  Tools
const _ = require('underscore');

//================
//  GET Handlers
//================

//  Hello
aoe.get('/', (req, res) => {
    res.send('AOE_Hello.js');
});

//  Dash
aoe.get('/dash', (req, res) => {
    res.send('AOE_Dash.js');
});

//  Ctrl
aoe.get('/ctrl', (req, res) => {
    res.send('AOE_Ctrl.js');
});

//  Open
aoe.get('/open', (req, res) => {
    res.send('AOE_Open.js');
});

//================
//  POST Handlers
//================