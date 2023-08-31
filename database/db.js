const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: '203459',
    password: '2023',
    port: 5432,
});

pool.on('error', (err, client) => {
    console.error('Error en la conexión con la db:', err);
  });
  
  module.exports = pool;