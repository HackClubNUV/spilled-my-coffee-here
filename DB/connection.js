const mongoose = require('mongoose');
require('dotenv').config({path: '../config/config.env'});
const colors = require('colors');

const URI = process.env.MONGOURI;

const connectDB = async () => {
    try{
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        }),
        console.log("Database connected!".yellow);
    }
    catch(e){
        console.log(e);
    }
}

module.exports = connectDB;