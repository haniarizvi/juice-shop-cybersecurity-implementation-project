require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const { logger } = require('./utils/logger');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();
const PORT = process.env.PORT || 8080;

// Security Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
    console.log(`Server running at http://localhost:${PORT}`);
});