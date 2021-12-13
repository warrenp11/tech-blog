const User = require("./User");
const Post = require("./Post");

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

module.exports = { User, Post };
