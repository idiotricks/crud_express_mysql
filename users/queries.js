
const _ = require('lodash');
const expresso = require('../expresso');

exports.getFromUsernameAndPassword = (req) => {
  return new Promise((resolve, reject) => {
    try {
      const username = req.body.username || '';
      const password = req.body.password || '';

      const query = `
        SELECT 
          id,
          last_name as 'lastName',
          first_name as 'firstName',
          username,
          email,
          is_active as 'isActive'
        FROM user 
        WHERE username=? AND password=?
      `;
      expresso.databases.ExpressoMySQL.query(query, [username, password], (err, rows, fields) => {
        if (err) { 
          reject(err) 
        } else {
          if (rows.length <= 0) {
            reject('User tidak ditemukan. Username dan password tidak cocok!');
          } 
          resolve(rows[0]);
        }
        
      })
    } catch (err) {
      reject(err.toString());
    }
  });
}


exports.getFromEmailAndPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    try {
      const query = 'SELECT * FROM user WHERE email=? AND password=?';
      expresso.databases.ExpressoMySQL.query(query, [email, password], (err, rows, fields) => {
        if (err) { 
          reject(err) 
        } else {
          resolve(rows[0]);
        }
      })
    } catch (err) {
      reject(err.toString());
    }
  });
}


const get = exports.get = (req) => {
  return new Promise((resolve, reject) => {
    try {
      const id = _.has(req.params, 'id') ? req.params.id : req;
      const query = `
        SELECT 
          id,
          last_name as 'lastName',
          first_name as 'firstName',
          username,
          email,
          is_active as 'isActive'
        FROM user 
        WHERE id=?
      `;
      expresso.databases.ExpressoMySQL.query(query, [id], (err, rows, fields) => {
        if (err) { 
          reject(err);
        } else {
          resolve(rows[0]);
        }
      })
    } catch (err) {
      reject(err.toString());
    }
  })
}

exports.create = (req) => {
  return new Promise((resolve, reject) => {
    try {
      const username = req.body.username;
      const email = req.body.email;
      const firstName = req.body.firstName || '';
      const lastName = req.body.lastName || '';
      const password = req.body.password;
      const isActive = req.body.isActive || false;

      const query = `
        INSERT INTO user 
        (
          username, 
          email, 
          password, 
          first_name, 
          last_name,
          is_active
        ) VALUES (?, ?, ?, ?, ?, ?)
      `;

      expresso.databases.ExpressoMySQL.query(
        query, 
        [
          username, 
          email, 
          password, 
          firstName, 
          lastName,
          isActive
        ], 
        (err, rows) => {
          if (err) { 
            reject(err.toString()); 
          } else {
            get(rows.insertId)
              .then(rows => resolve(rows))
              .catch(err => reject(err.toString()));
          }
      });
    } catch (err) {
      reject(err.toString());
    }
  })
}