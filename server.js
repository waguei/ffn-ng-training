var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = 8080;
var api = require('./api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'),{etag:false}));

app.use('/api',api)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public/index.html'));
});

app.listen(port, function () {
  console.log('listen '+port);
});