const _ = require('lodash');
const jwt = require('jsonwebtoken');
const ini = require('./ini');

exports.ExpressoAuthJWT = (methods, req) => {
  const token = req.headers.authorization;
  const includes = _.includes(methods, req.method);
  req.user = null;
  
  if (includes) {
    if (!token) {
      throw Error('Invalid Token');
    }
    req.user = jwt.verify(token, ini.SECRET_KEY);
  }
}