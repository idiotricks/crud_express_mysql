var mysql = require('mysql');


DATABASE = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crud_express'
}

var conn = mysql.createConnection(DATABASE)
conn.connect(function(err) {
  if (err) throw err;
});

module.exports = conn;