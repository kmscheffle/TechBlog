// Import necessary modules
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const BlogPost = sequelize.define('BlogPost', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return BlogPost;
};