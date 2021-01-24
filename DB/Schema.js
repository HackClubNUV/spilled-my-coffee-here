const mongoose = require('mongoose');

const User = new mongoose.Schema({
    FullName : String,
    points: {
        type: Number,
        required: true
    },
    rank: {
        type: String,
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

module.exports = User = mongoose.model('User', User);