const express = require('express');
const Ticket = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  const tickets = await Ticket.find({});
  res.send({ tickets });
});

module.exports = router;
