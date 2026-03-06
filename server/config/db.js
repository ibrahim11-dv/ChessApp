const mysql = require('mysql2/promise');
require('dotenv').config();
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'chess_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port : 3307
});

(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MySQL successfully!');
        connection.release();
    } catch (error) {
        console.error('Error connecting to MySQL:', error.message);
    }
})();

module.exports = pool;