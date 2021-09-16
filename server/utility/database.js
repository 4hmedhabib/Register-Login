const mysql = require('mysql2');

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'login_system'
});

module.exports = db;
