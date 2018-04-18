const { assert } = require('chai');
const request = require('supertest');
const app = require('../../app');
const { seedUserToDatabase, buildUserObject } = require('../test-utils');
const User = require('../../models/user');

const { connectDatabaseAndDropData, diconnectDatabase } = require('../setup-teardown-utils');

describe('Server path /users', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  describe('POST', () => {
    it('save the video to the database', async () => {
      const user = buildUserObject();

      await request(app)
        .post('/api/users')
        .type('form')
        .send(user);


      const addedUser = await User.findOne(user);
      assert.isNotNull(addedUser);
      assert.isNotNull(addedUser.firstName);
    });

    it('user without name should not be saved', async () => {
      const user = {
        lastNAme: 'Last name',
      };

      const response = await request(app)
        .post('/api/users')
        .type('form')
        .send(user);

      assert.deepEqual(await User.find({}), []);
      assert.equal(response.status, 400);
    });
  });

  describe('GET', () => {
    it('renders the correct username', async () => {
      const user = await seedUserToDatabase();
      const response = await request(app)
        .get('/api/users');

      assert.include(response.text, user.firstName);
    });
  });

  describe('PUT', () => {
    it('should update an user', async () => {
      const userProperties = buildUserObject();
      const user = await seedUserToDatabase(userProperties);

      userProperties.firstName = 'another name';

      await request(app)
        .put(`/api/users/${user._id}`)
        .type('form')
        .send(userProperties);

      const updatedUser = await User.findById(user._id);
      assert.include(updatedUser.firstName, userProperties.firstName);
    });
  });

  describe('DELETE', () => {
    it('should delete an user', async () => {
      const userProperties = buildUserObject();
      const user = await seedUserToDatabase(userProperties);

      await request(app)
        .delete(`/api/users/${user.id}`);

      const removed = await User.findById(user._id);
      assert.isNull(removed);
    });
  });
});
