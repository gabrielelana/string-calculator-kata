class Calculator {
  add(...input) {
    if (input.length > 1) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return input.reduce(reducer);
    }
    return 0;
  }
}

module.exports = { Calculator };
