const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const user = new User({ firstName, lastName, email });

  user.validateSync();
  if (user.errors) {
    res.status(400).send({ errors: user.errors });
  } else {
    await user.save();
    res.status(201).send({ user });
  }
});

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.send({ users });
});

router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, email } = req.body;
  const user = new User({ firstName, lastName, email });

  user.validateSync();
  if (user.errors) {
    res.status(400).send({ errors: user.errors });
  } else {
    await User.findByIdAndUpdate(userId, { firstName, lastName, email });
    res.status(201).send({ user });
  }
});

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  await User.findByIdAndRemove(userId);
  res.status(200).send();
});
module.exports = router;
