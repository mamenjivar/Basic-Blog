const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// connect DB locally
// make sure you "start" database first locally
connectDB();
const Blog = require('./models/blog');

// push this to its own routes folder
app.get('/', (req, res, next) => {
    res.send('BACKEND IS WORKING');
});

// push this to its own route folder/file
// view blogs route
app.get('/blog', (req, res) => {
    Blog.find({}, (err, blog) => {
        if(err){
            console.log('ERROR! inside serverjs');
        } else {
            res.json(blog);
        }
    });
});

// push this to its own route as well
// post blogs route
app.get('/blog/new', (req, res) => {
    Blog.create(req.body.blog, (err, newBlog) => {
        if(err){
            console.log('SUBMISSION SUCCESS!');
        } else {
            console.log('SOMETHING WENT WRONG!');
        }
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is Running');
});

// var port = normalizePort(process.env.PORT || '9000');
// app.set('port', port);