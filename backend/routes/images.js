// Stub route for image upload/serving (expand with multer or similar)

const express = require('express');
const router = express.Router();

// TODO: Implement image upload logic

router.post('/upload', (req, res) => {
  // TODO: Handle image upload
  res.json({ message: 'Image upload not implemented yet.' });
});

module.exports = router;