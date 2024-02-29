// Import necessary modules
const express = require('express');
const router = express.Router();

// Import individual route modules
const userRoutes = require('./api/userRoutes');
const blogRoutes = require('./api/blogRoutes');
const commentRoutes = require('./api/commentRoutes');

// Define routes
//router.use('/users', userRoutes);
//router.use('/blogs', blogRoutes);
//router.use('/comments', commentRoutes);

module.exports = router;