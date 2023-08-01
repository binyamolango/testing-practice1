const Calculator = require('./calculator.js');

describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  describe('add method', () => {
    test('2 plus 2 equals to 4', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // Act
      const result = calculator.add(a, b);
      // Assert
      expect(result).toBe(4);
    });
    test('-2 plus -2 equals to -4', () => {
      // Arrange
      const a = -2;
      const b = -2;
      // Act
      const result = calculator.add(a, b);
      // Assert
      expect(result).toBe(-4);
    });
    test('-2 plus 20 equals to 18', () => {
      // Arrange
      const a = -2;
      const b = 20;
      // Act
      const result = calculator.add(a, b);
      // Assert
      expect(result).toBe(18);
    });
  });
  describe('sub method', () => {
    test('2 minus 2 equals to 0', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // Act
      const result = calculator.sub(a, b);
      // Assert
      expect(result).toBe(0);
    });
    test('20 minus 2 equals to 18', () => {
      // Arrange
      const a = 20;
      const b = 2;
      // Act
      const result = calculator.sub(a, b);
      // Assert
      expect(result).toBe(18);
    });
    test('-2 minus -2 equals to 0', () => {
      // Arrange
      const a = -2;
      const b = -2;
      // Act
      const result = calculator.sub(a, b);
      // Assert
      expect(result).toBe(0);
    });
  });
  describe('div method', () => {
    test('divide two negative numbers', () => {
      // Arrange
      const a = -4;
      const b = -2;
      // Act
      const result = calculator.div(a, b);
      // Assert
      expect(result).toBe(2);
    });
    test('divide a negative number and a positive number', () => {
      // Arrange
      const a = -2;
      const b = 4;
      // Act
      const result = calculator.div(a, b);
      // Assert
      expect(result).toBe(-0.5);
    });
    test('throw an error when dividing by zero', () => {
      // Arrange
      const a = 2;
      const b = 0;
      // Act & Assert
      expect(() => calculator.div(a, b)).toThrow(Error);
    });
  });
  describe('mul method', () => {
    test('multiply two positive numbers', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // Act
      const result = calculator.mul(a, b);
      // Assert
      expect(result).toBe(4);
    });
    test('multiply two negative numbers', () => {
      // Arrange
      const a = -2;
      const b = -2;
      // Act
      const result = calculator.mul(a, b);
      // Assert
      expect(result).toBe(4);
    });
    test('multiply one positive and other negative numbers', () => {
      // Arrange
      const a = 2;
      const b = -2;
      // Act
      const result = calculator.mul(a, b);
      // Assert
      expect(result).toBe(-4);
    });
  });
});