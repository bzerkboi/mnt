var spark = require('spark');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  spark.onEvent('trevor', function(data) {
    console.log('TREVOR: ' + JSON.stringify(data));
  });

  spark.onEvent('mandeep', function(data) {
    console.log('MANDEEP: ' + JSON.stringify(data));
  });

  spark.onEvent('LOL', function(data) {
    console.log("LOL: " + JSON.stringify(data));
  });

  var response = spark.login({accessToken: 'ACCESS_TOKEN'});
  res.send(response);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
