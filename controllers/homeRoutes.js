// Import necessary modules
const { BlogPost, User } = require('../models');

// Controller function to handle the homepage route
const getHomepage = async (req, res) => {
    try {
        const blogPosts = await BlogPost.findAll({ include: User });
        res.render('homepage', { blogPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller function to handle the login route
const getLogin = (req, res) => {
    res.render('login');
};

// Controller function to handle the signup route
const getSignup = (req, res) => {
    res.render('signup');
};

// Controller function to handle the dashboard route
const getDashboard = async (req, res) => {
    try {
        const user = req.user; // Assuming user information is stored in req.user after authentication
        const userPosts = await BlogPost.findAll({ where: { userId: user.id } });
        res.render('dashboard', { userPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getHomepage,
    getLogin,
    getSignup,
    getDashboard
};