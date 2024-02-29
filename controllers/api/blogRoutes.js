// Import necessary modules
const express = require('express');
const router = express.Router();
const { BlogPost, Comment, User } = require('../../models');

// GET route to display all blog posts
router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.findAll({ include: [User, Comment] });
        res.render('homepage', { blogPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET route to display a specific blog post
router.get('/post/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findByPk(req.params.id, { include: [User, Comment] });
        if (!blogPost) {
            res.status(404).json({ error: 'Blog post not found' });
        } else {
            res.render('blogPost', { blogPost });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST route to add a new blog post
router.post('/new', async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const newPost = await BlogPost.create({ title, content, userId });
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT route to update a blog post
router.put('/edit/:id', async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedPost = await BlogPost.update({ title, content }, { where: { id: req.params.id } });
        res.status(200).json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE route to delete a blog post
router.delete('/delete/:id', async (req, res) => {
    try {
        await BlogPost.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;