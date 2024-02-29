// Import necessary modules
const express = require('express');
const router = express.Router();
const { BlogPost, Comment, User } = require('../../models');

// GET route to retrieve all blog posts
router.get('/posts', async (req, res) => {
    try {
        const blogPosts = await BlogPost.findAll({ include: [User, Comment] });
        res.json(blogPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST route to create a new blog post
router.post('/posts', async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const newPost = await BlogPost.create({ title, content, userId });
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET route to retrieve a specific blog post by id
router.get('/posts/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findByPk(req.params.id, { include: [User, Comment] });
        if (!blogPost) {
            res.status(404).json({ error: 'Blog post not found' });
        } else {
            res.json(blogPost);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE route to delete a blog post by id
router.delete('/posts/:id', async (req, res) => {
    try {
        await BlogPost.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
