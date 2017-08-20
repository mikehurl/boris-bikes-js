import Bicycle from '../src/bicycle';

const expect = require('chai').expect;

describe('Bicycle', () => {
  describe('isWorking', () => {
    it('should respond to .isWorking', () => {
      expect(new Bicycle()).to.haveOwnProperty('isWorking');
    });
  });
});
