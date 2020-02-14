var express        = require('express');
var methodOverride = require('method-override');
var app            = express();
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');

mongoose.connect('mongodb://localhost/basic_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// MONGOOSE SCHEMA / DB FORMAT
var blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

var Blog = mongoose.model('Blog', blogSchema);

// manually push a new blog 
// Blog.create({
//     title: 'Test Blog',
//     author: 'Miggsception',
//     body: 'THIS IS THE FIRST TEST POST FOR LOCAL DB'
// });

// root route
app.get('/', function(req, res){
    res.redirect('/index')
});

// INDEX(HOME) ROUTE
app.get('/index', function(req, res){
    res.render('index');
});

// NEW ROUTE
app.get('/blog/new', function(req, res){
    res.render('new');
});

// when you hit submit on the form 
// CREATE ROUTE (new post)
app.post('/blog', function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render('new');
        } else {
            res.redirect('/blog');
        }
    });
});

// Blog Route
app.get('/blog', function(req, res){
    Blog.find({}, function(err, blog){
        if(err){
            console.log('ERROR!');
        } else {
            res.render('blog', {blog: blog});
        }
    });
});

// SHOW ROUTE
app.get('/blog/:id', function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect('/blog');
        } else {
            res.render('show', {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get('/blog/:id/edit', function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect('/blog');
        } else {
            res.render('edit', {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE
app.put('/blog/:id', function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect('/blog');
        } else {
            res.redirect('/blog' + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete('/blog/:id', function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/blog');
        } else {
            res.redirect('/blog');
        }
    });
});

app.listen(3000, function() {
    console.log('Server is Running!');
});