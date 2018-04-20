const User = require('../models/user');
const Ticket = require('../models/ticket');

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

const buildTicketObject = (options = {}, user) => {
  const subject = options.subject || 'Ticket subject';
  const description = options.description || 'Ticket description';
  const requester = user._id.toString();
  const assignee = user._id.toString();
  const status = options.status || 'New';
  const priority = options.priority || 'Medium';

  return {
    subject, description, requester, assignee, status, priority,
  };
};

// Add a ticket Item object to mongodb
const seedTicketToDatabase = async (options = {}, user) => {
  const ticket = await Ticket.create(buildTicketObject(options, user));
  return ticket;
};


module.exports = {
  buildUserObject,
  buildTicketObject,
  seedUserToDatabase,
  seedTicketToDatabase,
};
