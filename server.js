var express 	= require('express');
var app 		= express();
var mongojs 	= require('mongojs');
var db 			= mongojs('contactlist', ['contactlist']);
var bodyParser	= require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
	console.log('I recieved a GET request');
	db.contactlist.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	})

});

app.post('/contactlist', function(req, res) {
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc) {
		console.log(doc);
		res.json(doc);
	});
});

app.listen(3000);
console.log('Server running at port 3000');