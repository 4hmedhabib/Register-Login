const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(
	cors({
		origin: [],
		methods: [ 'GET', 'POST' ]
	})
);

app.get('/', (req, res) => {
	res.redirect('/api/v1');
});

app.get('/api/v1/', (req, res, next) => {
	res.send({
		page: 'Home'
	});
});

app.listen(port, () => {
	console.log('SERVER RUNNING PORT: ', port);
});
