const mysql = require('mysql2');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'MySql_pw_bc33!',
    database: '',
});

module.exports = connection;