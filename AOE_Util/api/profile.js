const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const auth = require('../middleware/auth');
const Profile = require('../models/Profile');
const User = require('../models/User');

//  @route      GET api/profle/me
//  @desc       Get current users profile
//  @access     Private
router.get('/me', auth, async (req, res) => {
  try {
    console.log('profile id:' + req.user.id);

    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    console.log('USer Found!');

    if (!profile) {
      console.log('No profile though...');
      return res.status(400).json({
        msg: 'There is no profile for this user'
      });
    }

    console.log(profile);
    res.json(profile);
  } catch (err) {
    console.log('self.js api/profile/me: catch Errorrr!');
    console.error(err.message);
    res.status(500).send('MSG: Server Error');
  }
});

//  @route      POST api/profile
//  @desc       Create or update user profile
//  @access     Private
router.post('/', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { website, location, bio } = req.body;

  //  Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;

  try {
    let profile = await Profile.findOne({
      user: req.user.id
    });

    if (profile) {
      //  Update
      profile = await Profile.findOneAndUpdate(
        {
          user: req.user.id
        },
        {
          $set: profileFields
        },
        {
          new: true
        }
      );
      return res.json(profile);
    }
    //  Create
    profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('MSG: Server Error');
  }
  console.log(profileFields.social.twitter);
  res.send('Hello');
});

//  @route      GET api/profile
//  @desc       GET all profiles
//  @access     Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'username',
      'avatar'
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//  @route      GET api/profile/user/user_id
//  @desc       GET profile by user ID
//  @access     Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['username', 'avatar']);

    if (!profile)
      return res.status(400).json({
        msg: 'Profile not found'
      });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({
        msg: 'profile not found'
      });
    }
    res.status(500).send('Server Error');
  }
});

//  @route      DELETE api/profile
//  @desc       Delete profile, user & posts
//  @access     Private
router.delete('/', auth, async (req, res) => {
  try {
    //  @todo - remove users posts

    //  Remove profile
    await Profile.findOneAndRemove({
      user: req.user.id
    });
    //  Remove User
    await User.findOneAndRemove({
      _id: req.user.id
    });

    res.json({
      msg: 'User deleted'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//  === Experience ===

//  @route      PUT api/profile/experience
//  @desc       Add profile experience
//  @access     Private
router.put(
  '/experience',
  [
    auth,
    [
      check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('company', 'Company is required')
        .not()
        .isEmpty(),
      check('from', 'From date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body;

    const newExp = {
      title: title,
      company,
      location,
      from,
      to,
      current,
      description
    };

    try {
      const profile = await Profile.findOne({
        user: req.user.id
      });

      profile.experience.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('MSG: Server Error no experience found');
    }
  }
);
//  @route      DELETE api/profile/experience/:exp_id
//  @desc       Delete experience from profile
//  @access     Private
router.delete('/experience/:exp_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    });

    //  Get remove index
    const removeIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.exp_id);

    profile.experience.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('MSG: Server Error - what experience?');
  }
});

//  === Education ===

//  @route      PUT api/profile/education
//  @desc       Add education experience
//  @access     Private
router.put(
  '/education',
  [
    auth,
    [
      check('school', 'School is required')
        .not()
        .isEmpty(),
      check('degree', 'Degree is required')
        .not()
        .isEmpty(),
      check('fieldofstudy', 'Field of study is required')
        .not()
        .isEmpty(),
      check('from', 'From date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    };

    try {
      const profile = await Profile.findOne({
        user: req.user.id
      });

      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('MSG: Server Error no experience found');
    }
  }
);

//  @route      DELETE api/profile/education/:exp_id
//  @desc       Delete education from profile
//  @access     Private
router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    });

    //  Get remove index
    const removeIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('MSG: Server Error - what education?');
  }
});

//  @route      GET api/profile/github/:username
//  @desc       Get user repos from GitHub
//  @access     Public
router.get('/github/:username', async (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${
        req.params.username
      }/repos?per_page=5&sort=created:asc&client_id=${config.get(
        'githubClientId'
      )}&client_secret=${config.get('githubSecret')}`,
      method: 'GET',
      headers: {
        'user-agent': 'node.js'
      }
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({
          msg: 'No Github profile found'
        });
      }

      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('MSG: Server Error - github');
  }
});

module.exports = router;
