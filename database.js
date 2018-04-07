const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';
const databaseUrl = process.env.DATABASE_URL || `mongodb://localhost/osiris_${env}`;
const options = {
};

module.exports = {
  mongoose,
  databaseUrl,
  options,
};
