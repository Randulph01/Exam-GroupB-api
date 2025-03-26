const express = require('express');
const app = express();
const port = 3000;

// Import routes
const examGroupRoute = require('./routes/examGroupRoute');

// Middleware to parse JSON
app.use(express.json());

//Member 1: Bajenting
app.get("/exams", (req, res) => {
    res.json([
        { id: 1, name: "Math Exam" },
        { id: 2, name: "Science Exam" }
    ]);
});

// Use routes
app.use(examGroupRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
