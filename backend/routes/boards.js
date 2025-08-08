// Routes for managing bingo boards

const express = require('express');
const router = express.Router();

// TODO: Import Board model

// GET all boards
router.get('/', (req, res) => {
  // TODO: Return all boards
  res.json([]);
});

// POST create a new board
router.post('/', (req, res) => {
  // TODO: Create a new board with req.body settings
  res.json({ message: 'Board created!' });
});

// Other board routes (update, delete, etc.) can be added here

module.exports = router;