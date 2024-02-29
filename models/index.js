// Import necessary modules
const Sequelize = require('sequelize');

// Initialize Sequelize with database connection details
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
});

// Define models
const BlogPost = require('./BlogPost')(sequelize, Sequelize);
const Comment = require('./Comment')(sequelize, Sequelize);
const User = require('./User')(sequelize, Sequelize);

// Define associations
BlogPost.hasMany(Comment);
Comment.belongsTo(BlogPost);
User.hasMany(BlogPost);
BlogPost.belongsTo(User);

// Synchronize models with the database
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing database:', error);
    });

module.exports = {
    sequelize,
    BlogPost,
    Comment,
    User
};