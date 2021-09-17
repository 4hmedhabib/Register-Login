const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(
	cors({
		origin: [ 'http://localhost:3000' ],
		methods: [ 'GET', 'POST' ],
		credentials: true
	})
);

app.use(express.json());

const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');

app.get('/', (req, res) => {
	res.redirect('/api/v1');
});

app.use('/api/v1', registerRoutes);
app.use('/api/v1', loginRoutes);

app.listen(port, () => {
	console.log('SERVER RUNNING PORT: ', port);
});
