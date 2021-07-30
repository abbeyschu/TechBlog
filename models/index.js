const Users = require('./Users');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = {
  Users,
  Comment,
  Post
};
