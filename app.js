
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



// GET /api/todos
app.get('/api/todos', (req, res) => {
	res.json(todos);
});
// POST /api/todos
app.post('/api/todos', (req, res) => {
	const { task } = req.body;
	const id = todos.length + 1; // Generate a new ID
	const newTask = { id, task, complete: false };

	todos.push(newTask);

	res.json({ id });
});
// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
	const id = parseInt(req.params.id, 10); // Convert ID to integer
	const taskIndex = todos.findIndex(task => task.id === id);

	if (taskIndex !== -1) {
		todos[taskIndex].complete = !todos[taskIndex].complete;
		res.json(todos[taskIndex]);
	} else {
		res.status(404).json({ message: 'Task not found' });
	}
});
// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


const message = `Server running: http://localhost:${port}`
app.listen(port, () => console.log(message))