const Ticket = require('../../models/ticket');

const { assert } = require('chai');
const { connectDatabaseAndDropData, diconnectDatabase } = require('../setup-teardown-utils');


describe('Model: Ticket', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  describe('subject', () => {
    it('should be a string', async () => {
      const nonStringTitle = 1;
      const ticket = {
        subject: nonStringTitle,
      };

      const createdTicket = new Ticket(ticket);
      assert.strictEqual(createdTicket.subject, nonStringTitle.toString());
    });

    it('should be a required field', async () => {
      const ticket = new Ticket({ title: '' });
      ticket.validateSync();
      assert.strictEqual(ticket.errors.subject.message, 'Path `subject` is required.');
    });
  });

  describe('description', () => {
    it('should be a string', async () => {
      const nonStringTitle = 1;
      const ticket = {
        description: nonStringTitle,
      };

      const createdTicket = new Ticket(ticket);
      assert.strictEqual(createdTicket.description, nonStringTitle.toString());
    });

    it('should be a required field', async () => {
      const ticket = new Ticket({ description: '' });
      ticket.validateSync();
      assert.strictEqual(ticket.errors.description.message, 'Path `description` is required.');
    });
  });

  describe('priority', () => {
    it('should be an enum', async () => {
      const ticket = new Ticket({ priority: 'Regular' });
      ticket.validateSync();
      assert.strictEqual(ticket.errors.priority.message, '`Regular` is not a valid enum value for path `priority`.');
    });

    it('should be a required field', async () => {
      const ticket = new Ticket({ priority: '' });
      ticket.validateSync();
      assert.strictEqual(ticket.errors.priority.message, 'Path `priority` is required.');
    });
  });

  describe('status', () => {
    it('should be an enum', async () => {
      const ticket = new Ticket({ status: 'Resolved' });
      ticket.validateSync();
      assert.strictEqual(ticket.errors.status.message, '`Resolved` is not a valid enum value for path `status`.');
    });

    it('should be a required field', async () => {
      const ticket = new Ticket({ status: '' });
      ticket.validateSync();
      assert.strictEqual(ticket.errors.status.message, 'Path `status` is required.');
    });
  });
});

