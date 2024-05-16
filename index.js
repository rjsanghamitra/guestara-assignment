const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CreateRoutes = require('./routes/create.js');
const GetRoutes = require('./routes/getdetails.js');
const EditRoutes = require('./routes/edit.js');
const SearchRoutes = require('./routes/search.js');

const app = express();

app.use(bodyParser.json());

app.use('/create', CreateRoutes);

app.use('/', GetRoutes);

app.use('/edit', EditRoutes);

app.use('/find', SearchRoutes);

app.get('/', (req, res) => {
	res.send('hello');
});

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		app.listen(8000, (req, res) => {
			console.log('connected on port 8000');
		});
	})
	.catch((error) => {
		console.log('error: ', error);
	});
