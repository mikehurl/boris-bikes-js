import DockingStation from '../src/docking-station';
import Bicycle from '../src/bicycle';

const expect = require('chai').expect;

describe('Docking Station', () => {
  describe('releaseBike', () => {
    it('should respond to .releaseBike', () => {
      expect(new DockingStation()).to.respondTo('releaseBike');
    });

    it('should release a bike', () => {
      const station = new DockingStation();
      const bike = station.releaseBike();
      expect(bike).to.be.an.instanceOf(Bicycle);
    });

    it('should release a working bike', () => {
      const station = new DockingStation();
      const bike = station.releaseBike();
      expect(bike.isWorking).to.equal(true);
    });
  });
});
