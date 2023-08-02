const capitalize = require('./capitalize.js');

describe('capitalize', () => {
  test('capitalize first letter of the string', () => {
    // Arrange
    const string = 'binyam';
    // Act
    const result = capitalize(string);
    // Assert
    expect(result).toBe('Binyam');
  });
  test('capitalize first letter of the string', () => {
    // Arrange
    const string = 'Yohannes';
    // Act
    const result = capitalize(string);
    // Assert
    expect(result).toBe('Yohannes');
  });
  test('capitalize first letter of the string', () => {
    // Arrange
    const string = 'olango';
    // Act
    const result = capitalize(string);
    // Assert
    expect(result).toBe('Olango');
  });
});