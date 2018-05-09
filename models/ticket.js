
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
      required: false,
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
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
    createdAt: {
      type: Date,
      default: new Date(),
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
  }),
);

module.exports = Ticket;
