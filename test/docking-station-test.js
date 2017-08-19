import DockingStation from '../src/docking-station';

const expect = require('chai').expect

describe('Docking Station', () => {
  describe('releaseBike', () => {
    it('should respond to .releaseBike', () => {
      expect(new DockingStation()).to.respondTo('releaseBike')
    })
  })
})
