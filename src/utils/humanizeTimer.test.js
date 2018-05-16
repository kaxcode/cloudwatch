import { millisecondsToHuman } from './humanizeTimer';

describe('humanizeTimer', () => {
  describe('#millisecondsToHuman', () => {
    it('converts time to be displayed in hours, seconds, minutes, and miliseconds', () => {
      // Arrange & Act
      const actual = millisecondsToHuman(7200000);

      // Assert
      expect(actual).toEqual('02:00:00:000');
      expect(actual).not.toBe(2);
      expect(actual).not.toBe(86350);
    });
  });
});
