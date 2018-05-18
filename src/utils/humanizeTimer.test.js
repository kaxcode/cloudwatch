import { millisecondsToHuman } from './humanizeTimer';

describe('humanizeTimer', () => {
  describe('#millisecondsToHuman', () => {
    it('converts milliseconds into a readable time value', () => {
      // Arrange & Act
      const actual = millisecondsToHuman(null);

      // Assert
      expect(actual).toEqual('02:00:00:000');
      expect(actual).not.toBe(2);
      expect(actual).not.toBe(86350);
    });
  });
});
