const { assert } = require('chai');

describe('user visits the landing page', () => {
  describe('and sees the page', () => {
    it('should display some names', () => {
      browser.url('/');
      assert.equal(browser.getText('#users-container'), 'samsepi0l');
      assert.equal(browser.getText('#users-container'), 'D0loresH4ze');
    });
  });
});

