const User = require('../models/user');
const Ticket = require('../models/user');

// Create and return a sample Item object
const buildUserObject = (options = {}) => {
  const firstName = options.firstName || 'Sarah';
  const lastName = options.lastName || 'Connor';
  const email = options.email || 'sarah@connor.com';
  return { firstName, lastName, email };
};

// Add a user Item object to mongodb
const seedUserToDatabase = async (options = {}) => {
  const user = await User.create(buildUserObject(options));
  return user;
};

// TODO
const buildTicketObject = (options = {}) => options;

// Add a ticket Item object to mongodb
const seedTicketToDatabase = async (options = {}) => {
  const ticket = await Ticket.create(buildTicketObject(options));
  return ticket;
};


module.exports = {
  buildUserObject,
  seedUserToDatabase,
  seedTicketToDatabase,
};
