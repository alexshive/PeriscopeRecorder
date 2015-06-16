var api = ""; // path to JSON file

var express = require('express');
var app = express();

var request = require('request');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/record', function(req, res) {

	request(api, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	res.send(body);
	  } else {
	  	console.log(error);
	  }
	})

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
