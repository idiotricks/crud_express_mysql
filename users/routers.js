

module.exports = (app) => {
  const controller = require('./controllers');

  app.route('/signin').post(controller.signin);
  app.route('/signup').post(controller.signup);
}