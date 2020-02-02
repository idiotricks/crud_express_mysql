var expresso = require('../expresso');


exports.all = function(req) {
  return new Promise((resolve, reject) => {
    try {
      const query = 'SELECT * FROM person';
      expresso.databases.ExpressoMySQL.query(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
  
      });
    } catch (err) {
      reject(err.toString());
    }
  });
}

const get = exports.get = (req) => {
  return new Promise((resolve, reject) => {
    try {
      const id = req.params ? req.params.id : req;
      const query = 'SELECT * FROM person WHERE id=?';
      expresso.databases.ExpressoMySQL.query(query, [id], (err, rows, fields) => {
        if (err) {
          reject(err);
        }
  
        resolve(rows[0]);
      });
    } catch (err) {
      reject(err.toString());
    }
  });
}

exports.create = (req) => {
  const name = req.body.name || 'No Name';
  return new Promise((resolve, reject) => {
    try {
      expresso.databases.ExpressoMySQL.query('INSERT INTO person (name) VALUES (?)', [name], 
        (err, rows) => {
          if (err) { reject(err); }
          get(rows.insertId)
            .then(rows => resolve(rows))
            .catch(err => reject(err));
        }
      );
    } catch (err) {
      resolve(err.toString());
    }
  });
}

exports.update = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = req.params.id;
      const person = await get(id);
      const query = 'UPDATE person SET name=? WHERE id=?';
      const name = req.body.name || person.name;
      
      expresso.databases.ExpressoMySQL.query(query, [name, id], async (err, rows, fields) => {
        if (err) {
          reject(err);
        }
  
        get(id)
          .then(rows => resolve(rows))
          .catch(err => reject(err));
      });
    } catch (err) {
      reject(err.toString());
    }
  });
}


exports.delete = (req) => {
  try {
    const id = req.params.id;
    const query = "DELETE FROM person WHERE id=?";
    return new Promise((resolve, reject) => {
      expresso.databases.ExpressoMySQL.query(query, [id], (err, rows) => {
        if (err) { reject(err); }
        resolve(rows);
      })
    })
  } catch (err) {
    reject(err.toString());
  }
}

