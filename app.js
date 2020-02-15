var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.get('/',function(req,res){
	res.render("login");
});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine',"ejs");
app.use(express.static('views'));

//Routes
app.listen(process.env.PORT, process.env.IP, function(){
	console.log('server listening on port 3000');
	console.log(process.env.PORT);
	console.log(process.env.IP);
});