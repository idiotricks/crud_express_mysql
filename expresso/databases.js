var mysql = require('mysql');

DATABASE = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crud_express'
}

conn = mysql.createConnection(DATABASE)
conn.connect(function(err) {
  if (err) throw err;
});

exports.ExpressoMySQL = conn;

