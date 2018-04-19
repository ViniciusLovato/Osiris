const express = require('express');
const User = require('../models/user');

const router = express.Router();

/**
*
* @api {post} /api/users Create a user
* @apiVersion 1.0.0
* @apiName Create
* @apiGroup User
*
* @apiParam (Request body) {String} firstName The person first name
* @apiParam (Request body) {String} lastName The person last name
* @apiParam (Request body) {String} email The person email
*
* @apiExample {js} Example usage:
* const data = {
*   "firstName": "Sarah",
*   "lastName": "Connor",
*   "email": "sarah@connor.com"
* }
*
* @apiSuccess (Success 201) {Object} user User saved
*
*/
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

/**
*
* @api {get} /api/users get a list of all users
* @apiVersion 1.0.0
* @apiName Get
* @apiGroup User
*
* @apiSuccess (Success 201) {Object[]} users List of users
*
*/
router.get('/', async (req, res) => {
  const users = await User.find({});
  res.send({ users });
});

/**
*
* @api {get} /api/users/:id get a user
* @apiVersion 1.0.0
* @apiName List
* @apiGroup User
*
* @apiParam {Number} id Users unique ID.
*
* @apiSuccess (Success 201) {Object} user User
*
*/
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  res.send({ user });
});

/**
*
* @api {put} /api/users/:id Create a user
* @apiVersion 1.0.0
* @apiName Update
* @apiGroup User
*
*
* @apiParam {Number} id Users unique ID.
* @apiParam (Request body) {String} firstName The person first name
* @apiParam (Request body) {String} lastName The person last name
* @apiParam (Request body) {String} email The person email
*
* @apiExample {js} Example usage:
* const data = {
*   "firstName": "Sarah",
*   "lastName": "Connor",
*   "email": "sarah@connor.com"
* }
*
* @apiSuccess (Success 201) {Object} user User updated
*
*/
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

/**
*
* @api {delete} /api/users/:id delete a user
* @apiVersion 1.0.0
* @apiName Delete
* @apiGroup User
*
* @apiParam {Number} id Users unique ID.
*
* @apiSuccess (Success 201)
*
*/
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  await User.findByIdAndRemove(userId);
  res.status(200).send();
});

module.exports = router;
