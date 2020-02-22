var mongoose = require('mongoose');

var registrationSchema = new mongoose.Schema({
	userName 		: String,
	emailId			: String,
	userId 			: String,
	password 		: String,
	confirmPassword : String,

});

module.exports = mongoose.model("registration",registrationSchema);