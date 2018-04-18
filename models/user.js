const { mongoose } = require('../database');

const User = mongoose.model(
  'User',
  mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  }),
);

module.exports = User;

