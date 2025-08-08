// Basic Express server stub

const express = require('express');
const cors = require('cors');
const boardsRouter = require('./routes/boards');
const teamsRouter = require('./routes/teams');
const imagesRouter = require('./routes/images');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/boards', boardsRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/images', imagesRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Heartwood Bingo API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));