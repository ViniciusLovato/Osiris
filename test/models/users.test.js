const User = require('../../models/user');
const { assert } = require('chai');
const { connectDatabaseAndDropData, diconnectDatabase } = require('../setup-teardown-utils');


describe('Model: User', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  describe('firstName', () => {
    it('should be a string', async () => {
      const nonStringTitle = 1;
      const user = {
        firstName: nonStringTitle,
      };

      const createdUser = new User(user);
      assert.strictEqual(createdUser.firstName, nonStringTitle.toString());
    });

    it('should be a required field', async () => {
      const user = new User({ firstName: '' });
      user.validateSync();
      assert.strictEqual(user.errors.firstName.message, 'Path `firstName` is required.');
    });
  });

  describe('lastName', () => {
    it('should be a string', async () => {
      const nonStringTitle = 1;
      const user = {
        lastName: nonStringTitle,
      };

      const createdUser = new User(user);
      assert.strictEqual(createdUser.lastName, nonStringTitle.toString());
    });

    it('should be a required field', async () => {
      const user = new User({ lastName: '' });
      user.validateSync();
      assert.strictEqual(user.errors.lastName.message, 'Path `lastName` is required.');
    });
  });

  describe('email', () => {
    it('should be a required field', async () => {
      const user = new User({ email: '' });
      user.validateSync();
      assert.strictEqual(user.errors.email.message, 'Path `email` is required.');
    });
  });
});

