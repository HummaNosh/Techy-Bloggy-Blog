const User = require('./User');
const Project = require('./Project');
const Newpost = require('./New');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Newpost };