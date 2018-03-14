import { secondsToHour, secondsToMinutes, seconds } from './humanizeTimer';

describe('Timer helpers', () => {
  it('it should return seconds in hours', () => {
    // Arrange & Act
    const actual = secondsToHour(82800);

    // Assert
    expect(actual).toEqual(23);
  });

  it('it should return seconds in hours rounded down', () => {
    // Arrange & Act
    const actual = secondsToHour(86350);

    // Assert
    expect(actual).toEqual(23);
  });

  it('it should return seconds in minutes', () => {
    // Arrange & Act
    const actual = secondsToMinutes(180);

    // Assert
    expect(actual).toEqual(3);
  });

  it('it should return seconds in minutes rounded down', () => {
    // Arrange & Act
    const actual = secondsToMinutes(3430);

    // Assert
    expect(actual).toEqual(57);
  });

  it('it should return seconds rounded down', () => {
    // Arrange & Act
    const actual = seconds(34.7898);

    // Assert
    expect(actual).toEqual(34);
  });
});
