'use strict';

module.exports = function(app) {
  var personController = require('../persons/controllers');

  app.route('/').get(personController.index);
  app.route('/persons').get(personController.persons);
  app.route('/persons').post(personController.persons);
  app.route('/persons/:id').get(personController.person);
  app.route('/persons/:id').patch(personController.person);
  app.route('/persons/:id').delete(personController.person);
};