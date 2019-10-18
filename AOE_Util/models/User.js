const mongoose = require('mongoose');

//  ~ Schema ~
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  // *realname
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // avatar: {
  //   type: String
  // },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
