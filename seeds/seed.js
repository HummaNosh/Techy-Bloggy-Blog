const sequelize = require('../config/connection');
const { User, New } = require('../models');

const userData = require('./userData.json');
const NewpostData = require('./Newpost.json');
// const commentData = require('./comment-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await New.bulkCreate(NewpostData);

  // await Comment.bulkCreate(commentData);

  process.exit(0);

};

seedDatabase();