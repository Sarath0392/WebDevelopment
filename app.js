var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.get('/',function(req,res){
	res.render("login");
});

app.get('/register',function(req,res){
	res.render("registration");
});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine',"ejs");
app.use(express.static('views'));

//Routes
app.listen(process.env.PORT, process.env.IP, function(){
	console.log('server listening on port 3000');
});

// app.listen(3000, function(){
// 	console.log('server listening on port 3000');
// });