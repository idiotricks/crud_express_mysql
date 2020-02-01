var figlet = require('figlet');

module.exports = (app) => {
  var port = process.env.PORT || 3000;
  figlet(`Listen ${port}`, function(err, data) {
    
    app.listen(port, function() {
      console.log(data);
    });
  });
}