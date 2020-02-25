var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var registerModel = require("./models/registrationModel");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', "ejs");
app.use(express.static('views'));
app.use(express.static('js'));
app.use(express.static('models'));
app.use(express.static('node_modules'));

mongoose.connect('mongodb+srv://WebDevopDB:1gkrohxWMx4UZOL8@mongodbcluster-so6fn.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('connected to DB!!!');
}).catch(err => {
	console.log('Error :', err.message);
});

app.get('/', function (req, res) {
	res.render("login");
});

app.get('/register', function (req, res) {
	errorMsg = '';
	userName = '';
	email = '';
	res.render("registration", {
		errorMsg: errorMsg,
		userName: userName,
		email: email
	});
});

app.post('/register', function (req, res) {
	var userName = req.body.name,
		email = req.body.email,
		username = req.body.username,
		password = req.body.password,
		cnfpassword = req.body.confirm;
	errorMsg = '';
	registerModel.find({ userId: username }, function (err, user) {
		if (err) {
			console.log(err);
		}
		else {
			if (user.length == 1) {
				errorMsg = "UserId already exists"
				res.render("registration",
					{
						errorMsg: errorMsg,
						userName: userName,
						email: email
					}
				);
			} else {
				var newRegistration = {
					userName: userName,
					emailId: email,
					userId: username,
					password: password,
					confirmPassword: cnfpassword
				};
					registerModel.create(newRegistration, function (err, newCreated) {
					if (err) {
						console.log(err);
					} else {
						errorMsg = "Registration done successfully";
						res.render("login");
					}
				});
			}
		}
	});	
});

//Routes
app.listen(process.env.PORT, process.env.IP, function(){
	console.log('server listening on port 3000');
});

// app.listen(3000, function () {
// 	console.log('server listening on port 3000');
// });