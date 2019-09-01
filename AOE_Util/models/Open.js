const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OpenSchema = new Schema({
  appList: {
    type: Schema.Types.ObjectId,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  certified: {
    type: Boolean,
    default: false
  }
});

module.exports = Open = mongoose.model('open', OpenSchema);
