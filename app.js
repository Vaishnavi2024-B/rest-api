// Import Express
const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// GET route (Fetch data)
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  res.json(users); // Respond with JSON data
});

// POST route (Create data)
app.post('/users', (req, res) => {
  const newUser = req.body; // Data sent in the request body
  newUser.id = Date.now();  // Assign a unique ID
  res.status(201).json(newUser); // Respond with the newly created user
});

// PUT route (Update data)
app.put('/users/:id', (req, res) => {
  const { id } = req.params; // Get the user ID from the URL
  const updatedUser = req.body; // Data sent in the request body
  updatedUser.id = id; // Update the ID
  res.json(updatedUser); // Respond with the updated user
});

// DELETE route (Delete data)
app.delete('/users/:id', (req, res) => {
  const { id } = req.params; // Get the user ID from the URL
  res.json({ message: `User with ID ${id} deleted` }); // Respond with a message
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
