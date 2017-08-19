'use strict';

var express = require('express');
var app = express();
var path = require('path');

// MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log('Web-server is listening on port:', port);
});
