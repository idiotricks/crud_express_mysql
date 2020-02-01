var response = require('../settings/response');
var personQueries = require('./queries');

exports.persons = function(req, res) {
  if (req.method === 'GET') {
    personQueries.all(req)
      .then(rows => {
        response(rows, res, 200)
      })
      .catch(err => response(err, res, 400));
  } 
  
  if (req.method === 'POST') {
    personQueries.create(req)
      .then(rows => response(rows, res, 201))
      .catch(err => response(err, res, 400));
  }
}

exports.person = function(req, res) {
  if (req.method === 'GET') {
    personQueries.get(req)
      .then(rows => {
        response(rows, res, 200)
      })
      .catch(err => response(err, res, 400));
  } 

  if (req.method === 'PATCH' || req.method === 'PUT') {
    personQueries.update(req)
      .then(rows => response(rows, res, 201))
      .catch(err => response(err, res, 400));
  }

  if (req.method === 'DELETE') {
    personQueries.delete(req)
    .then(rows => response('No Content', res, 204))
    .catch(err => response(err, res, 400));
  }
}

exports.index = function(req, res) {
  response('Percobaan index', res, 200);
}