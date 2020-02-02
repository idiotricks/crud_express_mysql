var responses = require('../expresso/responses');
const status = require('../expresso/status');
var userQueries = require('./queries');
var jwt = require('jsonwebtoken');
var secret = require('../expresso/ini');
var _ = require('lodash');

const expresso = require('../expresso');

exports.signin = function(req, res) {
  userQueries.getFromUsernameAndPassword(req)
    .then(rows => {
      // Signing a token with 1 hour of expiration:
      const data = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        user: rows 
      }
      expresso.responses.ExpressoResponseJSON(
        { token: jwt.sign(data, expresso.ini.EXPRESSO_SECRET_KEY) }, res, 200
      );
    })
    .catch(err => expresso.responses.ExpressoResponseJSON(err, res, status.EXPRESS_STATUS_400_BAD_REQUEST));
}

exports.signup = function(req, res) {
  userQueries.create(req)
    .then(rows => expresso.responses.ExpressoResponseJSON(rows, res, 200))
    .catch(err => expresso.responses.ExpressoResponseJSON(err, res, status.EXPRESS_STATUS_400_BAD_REQUEST));
}
