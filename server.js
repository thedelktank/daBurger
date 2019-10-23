var express = require('express');
var bodyParser = require('body-parser');
var ovrRide = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
require('./controllers/route')(app)


var port = process.env.PORTm || 8080;
app.listen(port);