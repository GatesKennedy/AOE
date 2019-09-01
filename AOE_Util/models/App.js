const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppSchema = new Schema({
  appId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  layout: [
    {
      height: {
        type: Number,
        required: true
      },
      width: {
        type: Number,
        required: true
      }
    }
  ],
  developer: {
    type: String,
    required: true
  },
  certified: {
    type: Boolean,
    default: false
  }
});

module.exports = App = mongoose.model('apps', AppSchema);
