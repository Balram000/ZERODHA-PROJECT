const express = require("express")
require('dotenv').config();
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3002;
const url = process.env.MONGODB_URL;

const app = express();

app.listen(PORT, () => {
    console.log('app started ')
    mongoose.connect(url)
    console.log(' db conected')


})