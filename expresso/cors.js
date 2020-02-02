const cors = require('cors');


exports.ExpressoCORS = (app) => {
  app.use(cors({
    origin: 'http://localhost:8081'
  }));
}