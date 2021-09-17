const mysql = require('mysql2');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'login_system'
});

db.connect(function(err) {
	if (err) throw err;
	console.log('Database Connected!');
});

module.exports = db;
