const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'BST',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;
