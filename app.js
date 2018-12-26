var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    app = express(),
    port = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('', {useNewUrlParser: true})

var NEW_Schema = new mongoose.Schema({
    //schema goes here
})

var DBNAME = mongoose.model('', NEW_Schema);

app.get('/', (req, res) => {
    res.send('got server up and running')
})

app.listen(port, function () {
    console.log('server up and running on port', port)

})