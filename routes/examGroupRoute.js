// routes/examGroupRoute.js
const express = require('express');
const router = express.Router();

// Placeholder route
router.get('/exam-group', (req, res) => {
  res.json({ message: 'Group <your_group> API' });  // Replace <your_group> with your actual group name
});

module.exports = router;
