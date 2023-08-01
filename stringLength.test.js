const { stringLength, reverseString } = require('./stringLength.js');

describe('stringLength', () => {
  test('the length of the string is equal to 5', () => {
    // Arrange
    const string = 'hello';
    // Act
    const result = stringLength(string);
    // Assert
    expect(result).toBe(5);
  });

  test('the string length is greater than 10.', () => {
    // Arrange
    const longString = 'this is a jest test from block 3.';
    // Act
    // Assert
    expect(() => stringLength(longString)).toThrow(Error);
  });

  test('the string is empty', () => {
    // Arrange
    const emptyString = '';
    // Act
    // Assert
    expect(() => stringLength(emptyString)).toThrow(Error);
  });
});

test('this is a reversed string', () => {
  // Arrange
  const newStr = 'hello';
  // Act
  const result = reverseString(newStr);
  // Assert
  expect(result).toBe('olleh');
});