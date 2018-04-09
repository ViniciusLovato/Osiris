
const { mongoose } = require('../database');

const Ticket = mongoose.model(
  'Ticket',
  mongoose.Schema({
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['New', 'Open', 'Pending', 'On-hold', 'Solved', 'Closed'],
      default: 'New',
      required: true,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Urgent'],
      default: 'Medium',
      required: true,
    },
  }),
);

module.exports = Ticket;