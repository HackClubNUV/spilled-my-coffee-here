const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

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

app.listen(PORT, () => {
    console.log(`The server in started on ${PORT}.`)
})