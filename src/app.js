const fs = require('fs');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Load movie data from JSON file

// DELETE /movies/:id
app.delete('/movies/:id', (req, res) => {
  // Complete the code
});


module.exports = app;
