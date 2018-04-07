const { assert } = require('chai');


describe('User visits landing page', () => {
  describe('has some values hardcoded', () => {
    it('should display the values', () => {
      browser.url('/bla');

      // save screenshot to file
      browser.saveScreenshot('./snapshot.png');

      assert.equal('oi', browser.getText('body'));
    });
  });
});
