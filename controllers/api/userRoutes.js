// routes/userRoutes.js

const express = require('express');
const router = express.Router();

// GET route to render the user registration form
router.get('/register', (req, res) => {
    res.render('register'); // Assuming you have a register.ejs file in your views directory
});

// POST route to handle user registration form submission
router.post('/register', (req, res) => {
    // Add user registration logic here
});

// GET route to render the user login form
router.get('/login', (req, res) => {
    res.render('login'); // Assuming you have a login.ejs file in your views directory
});

// POST route to handle user login form submission
router.post('/login', (req, res) => {
    // Add user login logic here
});

// GET route to handle user logout
router.get('/logout', (req, res) => {
    // Add user logout logic here
});

module.exports = router;