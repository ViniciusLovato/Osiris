const User = require('../models/user');

// Create and return a sample Item object
const buildUserObject = (options = {}) => {
  const firstName = options.firstName || 'Sarah';
  const lastName = options.lastName || 'Connor';
  const email = options.email || 'sarah@connor.com';
  return { firstName, lastName, email };
};

// Add a sample Item object to mongodb
const seedUserToDatabase = async (options = {}) => {
  const user = await User.create(buildUserObject(options));
  return user;
};

module.exports = {
  buildUserObject,
  seedUserToDatabase,
};
