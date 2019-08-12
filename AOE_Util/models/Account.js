const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    //      Back
    //  =============
    userPref: {
        appList: {
            type: [String],
            required: true
        },
        dateSignup: {
            type: Date,
            required: true
        },
        usageStreak: {
            type: [Number],
            required: true
        },
        appsCreated: {
            type: [String]
        }
    },
    //      Front
    //  =============
    userPers: {
        bio: {
            type: String
        },
        pic: {
            data: Buffer,
            contentType: String
        },
        promo: {
            type: String
        }
    }
});

module.exports = Account = mongoose.model('account', AccountSchema);