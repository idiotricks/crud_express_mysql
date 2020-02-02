var figlet = require('figlet');
const versions = require('./versions');

exports.ExpressoServer = (app) => {
  var port = process.env.PORT || 4100;
  figlet(`Expresso ${versions.version}`, function(err, data) {
    
    app.listen(port, function() {
      console.log(data);
    });
  });
}

