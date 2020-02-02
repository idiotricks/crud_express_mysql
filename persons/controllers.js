const expresso = require('../expresso');

var personQueries = require('./queries');

exports.persons = function(req, res) {
  if (req.method === 'GET') {
    personQueries.all(req)
      .then(rows => expresso.responses.ExpressoResponseJSON(rows, res, 200))
      .catch(err => expresso.responses.ExpressoResponseJSON(err, res, 400))
  } 
  
  if (req.method === 'POST') {
    personQueries.create(req)
      .then(rows => expresso.responses.ExpressoResponseJSON(rows, res, 201))
      .catch(err => expresso.responses.ExpressoResponseJSON(err, res, 400));
  }
}

exports.person = function(req, res) {
  if (req.method === 'GET') {
    personQueries.get(req)
      .then(rows => expresso.responses.ExpressoResponseJSON(rows, res, 200))
      .catch(err => expresso.responses.ExpressoResponseJSON(err, res, 400));
  } 

  if (req.method === 'PATCH' || req.method === 'PUT') {
    personQueries.update(req)
      .then(rows => expresso.responses.ExpressoResponseJSON(rows, res, 201))
      .catch(err => expresso.responses.ExpressoResponseJSON(err, res, 400));
  }

  if (req.method === 'DELETE') {
    personQueries.delete(req)
    .then(rows => expresso.responses.ExpressoResponseJSON('No Content', res, 204))
    .catch(err => expresso.responses.ExpressoResponseJSON(err, res, 400));
  }
}

exports.index = function(req, res) {
  if (req.method === 'GET') {
    expresso.responses.ExpressoResponseJSON('Percobaan index', res, 200);
  }
}