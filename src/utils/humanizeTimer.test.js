import { secondsToHour, secondsToMinutes, seconds } from './humanizeTimer';

describe('humanizeTimer', () => {
  describe('#secondsToHour', () => {
    it('converts seconds to a rounded-down whole hour', () => {
      // Arrange & Act
      const actual = secondsToHour(86350);

      // Assert
      expect(actual).toEqual(23);
      expect(actual).not.toBe(86350);
      expect(actual).not.toBe(24);
    });
  });

  describe('#secondsToMinutes', () => {
    it('converts seconds to a rounded-down whole minute', () => {
      // Arrange & Act
      const actual = secondsToMinutes(3430);

      // Assert
      expect(actual).toEqual(57);
      expect(actual).not.toBe(3430);
      expect(actual).not.toBe(58);
    });
  });

  describe('#seconds', () => {
    it('it should return seconds rounded down', () => {
      // Arrange & Act
      const actual = seconds(34.7898);

      // Assert
      expect(actual).toEqual(34);
    });
  });
});
