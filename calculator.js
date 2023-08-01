class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  sub(a, b) {
    this.result = a - b;
    return this.result;
  }

  div(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result = a / b;
    return this.result;
  }

  mul(a, b) {
    this.result = a * b;
    return this.result;
  }
}

module.exports = Calculator;