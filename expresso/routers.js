'use strict';

const requireJsonContent = () => {
  return (req, res, next) => {
    console.log('panggil requireJsonContent')
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server requires application/json')
    } else {
      next()
    }
  }
}

exports.ExpressoRouter = (app) => {
  const UserRouter = require('../users/routers');
  const PersonRouter = require('../persons/routers');
  
  PersonRouter(app);
  UserRouter(app);
};