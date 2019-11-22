/* global describe, it, expect */

const { Calculator } = require("../src/calculator");
describe("Calculator", () => {
  it("empty string should sum up to 0", () => {
    const calculator = new Calculator();
    expect(calculator.add("")).toBe(0);
  });

  it("takes two numbers and return the sum between them", () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
  });
});
