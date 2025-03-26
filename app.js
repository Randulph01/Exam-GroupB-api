const express = require('express');
const app = express();
const port = 3000;

// Import routes
const examGroupRoute = require('./routes/examGroupRoute');

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use(examGroupRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
