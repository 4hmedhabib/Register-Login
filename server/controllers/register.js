const db = require('../utility/database');

exports.getRegister = (req, res, next) => {
	console.log('success');
	res.send('success');
	next();
};

exports.postRegister = (req, res, next) => {
	const insertUser =
		'INSERT INTO users (firstname, lastname, phone, country, email, password, about, agree) VALUES (?,?,?,?,?,?,?,?)';

	db.query(
		insertUser,
		[
			req.body.firstname,
			req.body.lastname,
			req.body.phone,
			req.body.country,
			req.body.email,
			req.body.password,
			req.body.about,
			req.body.agree
		],
		(err, result) => {
			if (err) return;
			console.log(result);
			return res.send(result);
		}
	);
};
