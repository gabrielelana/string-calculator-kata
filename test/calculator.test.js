/* global describe, it, expect */

const { Calculator } = require("../src/calculator");

describe("Calculator", () => {
  it("empty string should sum up to 0", () => {
    const calculator = new Calculator();
    expect(calculator.add("")).toBe(0);
  });
});
