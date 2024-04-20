
router.get('/', async (_, response) => {
	// this maps to GET /api/todos
	const todos = await collection.find().toArray();
	response.json(todos);
})

router.post('/', async (request, response) => {
	// this maps to POST /api/todos
	const result = await collection.insertOne({ item, complete });
	response.json(result);
})

router.put('/:id', async (request, response) => {
	// this maps to PUT /api/todos/:id
	const result = await dbConnection.collection('todos').updateOne({ _id: new ObjectId(req.params.id) },
																{ $set: { complete: req.body.complete } });
	res.json(result);
})
// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


const message = `Server running: http://localhost:${port}`
app.listen(port, () => console.log(message))