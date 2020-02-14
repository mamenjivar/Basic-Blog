const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect DB locally
connectDB();

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is Running')
});