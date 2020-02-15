const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect DB locally
connectDB();
const Blog = require('./models/blog');

// push this to its own routes folder
app.get('/', (req, res, next) => {
    res.send('BACKEND IS WORKING');
});

app.get('/blog', (req, res) => {
    Blog.find({}, (err, blog) => {
        if(err){
            console.log('ERROR! inside serverjs');
        } else {
            // send blog information to react front
        }
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is Running');
});

// var port = normalizePort(process.env.PORT || '9000');
// app.set('port', port);