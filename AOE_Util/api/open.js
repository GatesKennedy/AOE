//  ~ Depend ~
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('../middleware/auth');
const Account = require('../models/Account');

//  ~ Routes ~

//  @route      GET api/open
//  @desc       Retrieve all apps in market
//  @access     Public
router.get('/', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({
                msg: 'There is no profile for this user'
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('MSG: Server Error');
    }
});

//  ~ Share ~
module.exports = router;