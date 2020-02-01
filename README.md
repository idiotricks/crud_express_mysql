# CRUD Express.js with MySQL
This is a simple application for the CRUD API in Express using MySQL.

## Quick Start

You must have a mysql server and create a database with the following query:

```sql
CREATE TABLE person (
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL DEFAULT 'No Name' 
);
```

Database name please adjust. You can find the database settings in the `settings/database.js` file:

```javascript
...

DATABASE = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crud_express'
}

...
```

So, if everything is finished! You can run:

```
$ npm install
$ npm run serve
```

Access http://localhost:3000/persons or http://localhost:3000/persons/:id to change (PATCH or PUT), delete (DELETE) data and retrieve details (GET) based on id.


