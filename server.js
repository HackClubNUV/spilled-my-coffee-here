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

// All fucntion used by routes
async function getAllUsers(req, res, next){
    const users = await User.find();
    res.status(200).json({sucess: true, count: users.legth,users: users});
}

async function getSingleUser(req, res, next){
    const user = await User.findOne({points: '10'});
    if(user)
        res.status(200).json({sucess: true, user: user});
    else
        res.status(200).json({sucess: true, user: 'not found'});
}

async function newuser(req, res, next){
        let user = await User.create(req.body);
        res.status(201).json({success: true, user: user});         
}

async function deleteUser(req, res, next){
    let user = await User.deleteOne({DiscordUserID: req.body.DiscordUserID})
    res.json(200).json({sucess: true, user: {}})
}

async function updatePoints(req, res, next){
    let user = await User.findOneAndUpdate({DiscordUserID: req.body.DiscordUserID}, {$inc: { points: 10}}, {new : true});
    console.log(user);
    res.status(200).json({sucess: true, user: user})
}


// All Routes used
app.get('/', (req, res, next) => {
    res.send('Welcome to Spilled My Coffee Here API!')
});
app.get('/users', getAllUsers);

app.get('/user', getSingleUser);

app.post('/newuser', newuser);

app.delete('/deleteuser', deleteUser);

app.put('/points', updatePoints);

app.listen(PORT, () => {
    console.log(`The server in started on ${PORT}.`)
})