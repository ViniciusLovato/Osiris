const { assert } = require('chai');
const request = require('supertest');
const app = require('../../app');
const { seedTicketToDatabase } = require('../test-utils');

const { connectDatabaseAndDropData, diconnectDatabase } = require('../setup-teardown-utils');


describe('Server path /tickets', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  describe('GET', () => {
    it('renders the correct username', async () => {
      const user = await seedTicketToDatabase();
      const response = await request(app)
        .get('/api/users');

      assert.include(response.text, user.firstName);
    });
  });
});
