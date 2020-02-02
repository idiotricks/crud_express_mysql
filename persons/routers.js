

module.exports = (app) => {
  const controller = require('./controllers');

  app.route('/persons').get(controller.persons);
  app.route('/persons').post(controller.persons);
  app.route('/persons/:id').get(controller.person);
  app.route('/persons/:id').patch(controller.person);
  app.route('/persons/:id').delete(controller.person);
}