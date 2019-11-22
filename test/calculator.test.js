/* global describe, it, expect */

const { Calculator } = require("../src/calculator");
describe("Calculator", () => {
  const calculator = new Calculator();

  it("empty string should sum up to 0", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("takes two numbers and return the sum between them", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it("take the number in format string and return the integer of that string", () => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number =>
      expect(calculator.add(number.toString())).toBe(number)
    );
  });
});
