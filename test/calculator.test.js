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
    expect(calculator.add("1")).toBe(1);
  });
});
