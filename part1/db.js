const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: '',
    database: 'DogWalkService'
});

module.exports = pool;