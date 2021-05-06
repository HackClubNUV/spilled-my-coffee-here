const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./DB/Schema');
// Make a config folder with config.env file and store PORT and MONGOURI
dotenv.config({ path: './config/config.env' });

// express essentials
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS
app.use(cors());


// Mongo DB
const connectDB = require('./DB/connection');
connectDB();    

const PORT = process.env.PORT || 8080;
console.log(PORT);

// @desc To get information of all users on the database
app.get('/users', async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({sucess: true, count: users.legth,users: users});
});

async function newuser(req, res, next){
    let user = await User.create(req.body);
    res.status(201).json({success: true, data: user}); 
}

app.post('/newuser', newuser);

app.listen(PORT, () => {
    console.log(`The server in started on ${PORT}.`)
})