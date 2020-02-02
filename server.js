var express = require('express');
var app = express();
var expresso = require('./expresso');


expresso.cors.ExpressoCORS(app)
expresso.middlewares.ExpressoMainMiddlware(app)
expresso.parsers.ExpressoJSONParser(app)
expresso.routers.ExpressoRouter(app)
expresso.servers.ExpressoServer(app)
