const { assert } = require('chai');
const request = require('supertest');
const app = require('../../app');


describe('Server path /create', () => {
  describe('POST', () => {
    it('save a ticket and redirect', () => {

    });
  });

  describe('GET', () => {
    it('renders the correct username', async () => {
      const response = await request(app)
        .get('/users');

      assert.include(response.text, 'samsepi0l');
    });
  });
});
