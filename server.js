var app = require('express')();

var parser = require('./settings/parser');
var route = require('./settings/route');
var serve = require('./settings/serve');

parser(app);
route(app);
serve(app);
