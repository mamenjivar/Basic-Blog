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

app.get('/blog/new', function(req, res){
    res.render('new');
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

app.listen(3000, function() {
    console.log('Server is Running!');
});