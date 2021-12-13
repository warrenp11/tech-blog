const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Create Associations
//
// User can make many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// Posts belong to a specific user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment belongs to a post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// A user can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// A post can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
