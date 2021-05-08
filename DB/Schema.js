const mongoose = require('mongoose');

const user = new mongoose.Schema({
    FullName : String,
    points: {
        type: Number,
        required: true
    },
    DiscordUSerID: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = User = mongoose.model('User', user);