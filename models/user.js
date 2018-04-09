const { mongoose } = require('../database');
const { isEmail } = require('validator');

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
      validate: {
        validator: isEmail,
        message: 'invalid email',
      },
    },
  }),
);

module.exports = User;

