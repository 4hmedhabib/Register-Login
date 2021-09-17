const db = require('../utility/database');
const bcrypt = require('bcrypt');
const saltRounds = 12;

exports.getRegister = (req, res, next) => {
	console.log('success');
	res.send('success');
	next();
};

exports.postRegister = (req, res, next) => {
	const insertUser =
		'INSERT INTO users (firstname, lastname, phone, country, email, password, about, agree) VALUES (?,?,?,?,?,?,?,?)';

	bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
		if (err) throw err;
		db.query(
			insertUser,
			[
				req.body.firstname,
				req.body.lastname,
				req.body.phone,
				req.body.country,
				req.body.email,
				hash,
				req.body.about,
				req.body.agree
			],
			(err, result) => {
				if (err) {
					console.log('Error!', err.sqlMessage);
					return;
				}
				console.log('Successfully Added');
				return res.send(result);
			}
		);
	});

	return;
};
