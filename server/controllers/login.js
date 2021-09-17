const db = require('../utility/database');
const bcrypt = require('bcrypt');
const { response } = require('express');

exports.postLogin = (req, res, next) => {
	if (!req.body.email && !req.body.password) return;
	db.query('SELECT * FROM users WHERE email = ?', req.body.email, (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		if (result.length > 0) {
			bcrypt.compare(req.body.password, result[0].password, (err, response) => {
				if (err) throw err;
				if (response) {
					return res.send({ message: 'Successfully Logged!', result: result });
				} else {
					return res.send({ message: 'Email/Password are incorrect!' });
				}
			});
		} else {
			res.send({ message: 'Email does not exists!' });
			return;
		}
	});
};
