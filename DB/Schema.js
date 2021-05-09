const mongoose = require('mongoose');

const user = new mongoose.Schema({
    FullName : String,
    points: {
        type: Number,
        required: true,
        index:true
    },
    DiscordUserID: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
});

module.exports = User = mongoose.model('User', user);