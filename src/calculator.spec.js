import calculator from "./calculator";

describe("calculator", () => {
  test("add two numbers", () => {
    expect(calculator.add(5, 5)).toEqual(10);
  });

  test("subtract two numbers", () => {
    expect(calculator.subtract(10, 5)).toEqual(5);
  });

  test("divide two numbers", () => {
    expect(calculator.divide(100, 5)).toEqual(20);
  });

  test("multiply two numbers", () => {
    expect(calculator.multiply(7, 2)).toEqual(14);
  });
});
