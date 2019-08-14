const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  ~ Schema ~
const AccountSchema = new Schema({
    //  === Back ===
    userPref: {
        appList: [{
            appId: {
                type: Schema.Types.ObjectId,
                ref: 'apps'
            },
            status: {
                type: Boolean,
                default: true
            }
        }],
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
    //  === Front ===
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