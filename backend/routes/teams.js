// Routes for managing teams

const express = require('express');
const router = express.Router();

// TODO: Import Team model

// GET all teams
router.get('/', (req, res) => {
  // TODO: Return all teams
  res.json([]);
});

// POST create a new team
router.post('/', (req, res) => {
  // TODO: Create a new team with req.body settings
  res.json({ message: 'Team created!' });
});

// More team routes (update, add board, etc.) can be added here

module.exports = router;