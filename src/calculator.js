class Calculator {
  add(...input) {
    if (input.length > 1) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return input.reduce(reducer);
    } else if (input != "") {
      return Number.parseInt(input);
    }
    return 0;
  }
}

module.exports = { Calculator };
