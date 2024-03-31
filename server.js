const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRouter = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/shopping_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use('/tasks', taskRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
