
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

const todos = [
	{ id: 1, item: 'Learn JavaScript', complete: false },
	{ id: 2, item: 'Learn Express', complete: false },
	{ id: 3, item: 'Build a To Do App', complete: false }
]

app.get('/', (_, response) => {
	response.sendFile('index.html', { root })
})

javascript const { MongoClient } = require('mongodb');
const fs = require('fs');
let dbConnection;
fs.readFile('./secrets/mongodb.json', (err, data) => {
	if (err) throw err;
	const config = JSON.parse(data);
	const client = new MongoClient(config.uri, { useNewUrlParser: true, useUnifiedTopology: true });
	client.connect(err => {
		if (err) throw err;
		dbConnection = client.db();
		console.log("Connected successfully to MongoDB");
	});
});

app.use('/api/todos', require('./api-routes'))
