/*==============
    DEPENDS
==============*/

//  express
const express = require('express');
const aoe = express();
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
    res.render('AOE_Hello.js');
});

//  Dash
aoe.get('/dash', (req, res) => {
    res.render('AOE_Dash.js');
});

//  Ctrl
aoe.get('/ctrl', (req, res) => {
    res.render('AOE_Ctrl.js');
});

//  Open
aoe.get('/open', (req, res) => {
    res.render('AOE_Open.js');
});

//  Talk
aoe.get('/', (req, res) => {
    res.render('AOE_Talk.js');
});

//================
//  POST Handlers
//================

