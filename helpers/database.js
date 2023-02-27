// get the client
const mysql = require("mysql2");

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql
  .createPool({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USERNAME,
    database: process.env.MYSQL_DB,
    password: process.env.MYSQL_DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

module.exports = pool;
