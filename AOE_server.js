const express = require('express');
const mongoose = require('mongoose');
//  initialize aoe variable
const aoe = express();
//  initialze environment variable || default value = 5000
const PORT = process.env.PORT || 5000;
//  callback: console.log for connection
aoe.listen(PORT, () => console.log(`Server started on port ${PORT}`));

aoe.use(express.json());
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

//  Talk
aoe.get('/', (req, res) => {
    res.send('AOE_Talk.js');
});

//================
//  POST Handlers
//================