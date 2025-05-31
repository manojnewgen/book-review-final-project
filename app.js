const express = require('express');
require('dotenv').config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth')); // Add this line
app.use('/api/books', require('./routes/books'));

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;