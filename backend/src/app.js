const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/error.middleware');
require('dotenv').config();

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running perfectly' });
});

// Mount all API routes
app.use('/api', routes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
