# CRUD Express.js with MySQL
This is a simple application for the CRUD API in Express using MySQL.

## Quick Start

You must have a mysql server and create a database with the following query:

```sql
CREATE TABLE person (
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL DEFAULT 'No Name' 
);

CREATE TABLE IF NOT EXISTS user (
  id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  username VARCHAR(100),
  password TEXT
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

Database name please adjust. You can find the database settings in the `settings/databases.js` file:

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

## Expresso 1.0

```
  _____                                      _   ___  
 | ____|_  ___ __  _ __ ___  ___ ___  ___   / | / _ \ 
 |  _| \ \/ / '_ \| '__/ _ \/ __/ __|/ _ \  | || | | |
 | |___ >  <| |_) | | |  __/\__ \__ \ (_) | | || |_| |
 |_____/_/\_\ .__/|_|  \___||___/___/\___/  |_(_)___/ 
            |_|                                       

```

