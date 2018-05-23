import { millisecondsToHuman } from './humanizeTimer';

describe('humanizeTimer', () => {
  describe('#millisecondsToHuman', () => {
    it('converts null into a readable time value', () => {
      // Arrange & Act
      const actual = millisecondsToHuman(null);

      // Assert
      expect(actual).toEqual('00:00:00:000');
    });

    it('converts milliseconds into a readable time value', () => {
      // Arrange & Act
      const actual = millisecondsToHuman(215999999);

      // Assert
      expect(actual).toEqual('59:59:59:999');
    });
  });
});
