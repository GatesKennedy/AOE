const express = require('express');
const request = require('request');
const config = require('config');
const mongoose = require('mongoose');
const router = express.Router();

const auth = require('../middleware/auth');
const Open = require('../models/Open');
const App = require('../models/App');

//  ~ Routes ~

//  @route      GET api/open
//  @desc       Retrieve all apps in market
//  @access     Public
router.get('/', auth, async (req, res) => {
  try {
    const appList = await App.find().populate(
      'appId',
      'developer',
      'certified'
    );
    res.send(appList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("hmm... there's nothing here yet...");
  }
});

//  ~ Share ~
module.exports = router;
