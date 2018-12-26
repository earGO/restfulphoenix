var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    app = express(),
    port = 3100;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/phoenix_realty_laws', {useNewUrlParser: true})

var postSchema = new mongoose.Schema({
    title: String,
    image: String,
    created: {type: Date,default: Date.now()},
    body: String,
    link: String
})

var RealtyLaw = mongoose.model('RealtyLaw', postSchema);

app.get('/', (req, res) => {
    res.redirect('/phoenix')
})

//RESTful routes are
//INDEX - get - /phoenix - shows all blog posts in a short versions
app.get('/phoenix',(req,res)=>{
    RealtyLaw.find({},(err,posts)=>{
        if(err){
            console.log('got error fetching posts: \n',err)
        } else {
            console.log('successfully fetched posts')
            res.render('index',{posts:posts})
        }
    })
})

//NEW - get - /phoenix/new - shows a form for a new blog post
//CREATE - post - /phoenix - creates new blog post, records it in a database and then redirects somewhere
//SHOW - get - /phoenix/:id - shows full single post
//EDIT - get - /phoenix/:id/edit - shows edit form for a single post
//UPDATE - put - /phoenix - updates a content of the post in a database then redirects somewhere
//DESTROY - delete - /phoenix/:id - deletes a post from a database

app.listen(port, function () {
    console.log('server up and running on port', port)

})