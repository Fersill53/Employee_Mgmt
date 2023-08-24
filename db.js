const mysql = require('mysql2');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'MySql_pw_bc33!',
    database: 'manage_emp',
});


connection.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = connection;