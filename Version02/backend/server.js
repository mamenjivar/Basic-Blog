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

// POST BLOGS ROUTE
app.post('/blog/new', (req, res) => {
    let blog = new Blog(req.body);

    blog.save()
        .then(blog => {
            res.status(200).json({'blog': 'blog added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new blog failed');
        });
});

// ports
app.listen(process.env.PORT || 4000, () => {
    console.log('Server is Running');
});