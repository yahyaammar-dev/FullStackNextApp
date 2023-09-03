// db.js
const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost', // Replace with your MySQL host
  user: 'root',      // Replace with your MySQL username
  password: 'edra@k', // Replace with your MySQL password
  database: 'nextdb', // Replace with your MySQL database name
  port: 3306,         // Replace with your MySQL port
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

module.exports = pool.promise(); // Export the promise-based pool
