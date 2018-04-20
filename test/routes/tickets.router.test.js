const { assert } = require('chai');
const request = require('supertest');
const app = require('../../app');
const Ticket = require('../../models/ticket');

const { seedTicketToDatabase, seedUserToDatabase, buildTicketObject } = require('../test-utils');
const { connectDatabaseAndDropData, diconnectDatabase } = require('../setup-teardown-utils');


describe('Server path /tickets', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  describe('POST', () => {
    it('save the ticket to the database', async () => {
      // Setup - seed user because we need an assignee and reporter
      // In this case they will be the same
      const user = await seedUserToDatabase();
      const ticket = buildTicketObject({}, user);

      const response = await request(app)
        .post('/api/tickets')
        .type('form')
        .send(ticket);

      const addedTicket = await Ticket.findOne(ticket);
      assert.equal(response.status, 201);
      assert.isNotNull(addedTicket);
      assert.isNotNull(addedTicket.subject);
    });
  });

  describe('GET', () => {
    it('renders the all the tickets', async () => {
      // Setup - seed user because we need an assignee and reporter
      // In this case they will be the same
      const user = await seedUserToDatabase();
      const ticket = await seedTicketToDatabase({}, user);

      const response = await request(app)
        .get('/api/tickets');

      assert.include(response.text, ticket.subject);
    });

    it('render the correct ticket', async () => {
      // Setup - seed user because we need an assignee and reporter
      // In this case they will be the same
      const user = await seedUserToDatabase();
      const ticket = await seedTicketToDatabase({}, user);

      const response = await request(app)
        .get(`/api/tickets/${ticket._id}`);

      assert.include(response.text, ticket.subject);
    });

    it('populates the ticket with assignee', async () => {
      // Setup - seed user because we need an assignee and reporter
      // In this case they will be the same
      const user = await seedUserToDatabase();
      const ticket = await seedTicketToDatabase({}, user);

      const response = await request(app)
        .get(`/api/tickets/${ticket._id}`);

      assert.include(response.text, ticket.subject);
      assert.include(response.text, user.firstName);
    });
  });

  describe('PUT', () => {
    it('should update a ticket', async () => {
      // Setup - seed user because we need an assignee and reporter
      // In this case they will be the same
      const user = await seedUserToDatabase();
      const ticketProperties = buildTicketObject({}, user);
      const ticket = await seedTicketToDatabase(ticketProperties, user);

      ticketProperties.subject = 'another subject';

      await request(app)
        .put(`/api/tickets/${ticket._id}`)
        .type('form')
        .send(ticketProperties);

      const updateTicket = await Ticket.findById(ticket._id);
      assert.include(updateTicket.subject, ticketProperties.subject);
    });
  });

  describe('DELETE', () => {
    it('should delete a ticket', async () => {
      // Setup - seed user because we need an assignee and reporter
      // In this case they will be the same
      const user = await seedUserToDatabase();
      const ticket = await seedTicketToDatabase({}, user);

      await request(app)
        .delete(`/api/tickets/${ticket.id}`);

      const removed = await Ticket.findById(ticket._id);
      assert.isNull(removed);
    });
  });
});
