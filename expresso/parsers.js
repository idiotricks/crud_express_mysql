var bodyParser = require('body-parser');


exports.ExpressoJSONParser = (app) => {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
}