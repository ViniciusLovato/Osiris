const express = require('express');
const Ticket = require('../models/ticket');

const router = express.Router();

/**
*
* @api {post} /api/tickets Create a ticket
* @apiVersion 1.0.0
* @apiName Create
* @apiGroup Ticket

* @apiParam (Request body) {String} subject The ticket subject
* @apiParam (Request body) {String} description The ticket description
* @apiParam (Request body) {ObjectId} requester
* @apiParam (Request body) {ObjectId} assignee
* @apiParam (Request body) {String} status Can be one of the following
  ['New', 'Open', 'Pending', 'On-hold', 'Solved', 'Closed']
* @apiParam (Request body) {String} priority Can be one of the following
  ['Low', 'Medium', 'High', 'Urgent']
*
* @apiExample {js} Example usage:
* const data = {
*   "subject": "A random subject",
*   "lastName": "A random descritpion",
*   "requester": "",
*   "assignee": "",
*   "status": "New",
*   "proprity": "Medium",
* }
*
* @apiSuccess (Success 201) {Object} user Ticket saved
*
*/
router.post('/', async (req, res) => {
  const ticketProperties = req.body;
  const ticket = new Ticket(ticketProperties);
  ticket.validateSync();

  if (ticket.errors) {
    res.status(400).send({ errors: ticket.errors });
  } else {
    await ticket.save();
    res.status(201).send({ ticket });
  }
});

/**
*
* @api {get} /api/tickets get a list of all tickets
* @apiVersion 1.0.0
* @apiName Get
* @apiGroup Ticket
*
* @apiSuccess (Success 201) {Object[]} tickets List of tickets
*
*/
router.get('/', async (req, res) => {
  const tickets = await Ticket.find({});
  res.send({ tickets });
});

/**
*
* @api {get} /api/tickets/:id get a ticket
* @apiVersion 1.0.0
* @apiName List
* @apiGroup Ticket
*
* @apiParam {Number} id Ticket unique ID.
*
* @apiSuccess (Success 201) {Object} user Ticket
*
*/
router.get('/:id', async (req, res) => {
  const ticketId = req.params.id;
  const ticket = await Ticket.findById(ticketId);
  res.send({ ticket });
});

/**
*
* @api {post} /api/tickets/:id Update a ticket
* @apiVersion 1.0.0
* @apiName Update
* @apiGroup Ticket
*
* @apiParam {Number} id Users unique ID.
*
* @apiParam (Request body) {String} subject The ticket subject
* @apiParam (Request body) {String} description The ticket description
* @apiParam (Request body) {ObjectId} requester
* @apiParam (Request body) {ObjectId} assignee
* @apiParam (Request body) {String} status Can be one of the following
  ['New', 'Open', 'Pending', 'On-hold', 'Solved', 'Closed']
* @apiParam (Request body) {String} priority Can be one of the following
  ['Low', 'Medium', 'High', 'Urgent']
*
* @apiExample {js} Example usage:
* const data = {
*   "subject": "A random subject",
*   "lastName": "A random descritpion",
*   "requester": "",
*   "assignee": "",
*   "status": "New",
*   "proprity": "Medium",
* }
*
* @apiSuccess (Success 201) {Object} user Ticket saved
*
*/
router.put('/:id', async (req, res) => {
  const ticketId = req.params.id;
  const ticketProperties = req.body;
  const ticket = new Ticket(req.body);

  ticket.validateSync();
  if (ticket.errors) {
    res.status(400).send({ errors: ticket.errors });
  } else {
    const savedTicket = await Ticket.findByIdAndUpdate(ticketId, ticketProperties);
    res.status(201).send({ savedTicket });
  }
});

/**
*
* @api {delete} /api/tickets/:id delete a ticket
* @apiVersion 1.0.0
* @apiName Delete
* @apiGroup Ticket
*
* @apiParam {Number} id Ticket unique ID.
*
* @apiSuccess (Success 201)
*
*/
router.delete('/:id', async (req, res) => {
  const ticketId = req.params.id;
  await Ticket.findByIdAndRemove(ticketId);
  res.status(201).send();
});

module.exports = router;
