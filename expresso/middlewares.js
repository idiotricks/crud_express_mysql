const _ = require('lodash');


exports.ExpressoJWTAuthMiddleware = () => {
  return (req, res, next) => {
    
  }
}

const ExpressoParserJSONMiddleware = exports.ExpressoParserJSONMiddleware = (methods = ['POST', 'PUT', 'PATCH']) => {
  return (req, res, next) => {
    const match = _.includes(methods, req.method);
    if (match && req.headers['content-type'] !== 'application/json') {
      resp('Server requires application/json', res, 400);
    }
    next();
  }
}

exports.ExpressoMainMiddlware = (app) => {
  app.use((req, res, next) => {
    ExpressoParserJSONMiddleware()(req, res, next);
  });
}

