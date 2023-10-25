const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// this is make the user model with two more fields : username, password
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema); 