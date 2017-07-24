var express = require('express');
var app = express();
var routes = require('./routes');
app.all('*',routes);
app.use(express.static('public'));

var listener = app.listen(8090);
console.log('Server started on port '+listener.address().port);