// Import necessary modules
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('Comment', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return Comment;
};