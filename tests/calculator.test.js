var { sum, sub, multiply, divide } = require("../functions/calculator.js");

test("sum 4 + 4 and return 8", () => {
  expect(sum(4, 4)).toBe(8);
});

test("sub 8 - 4 return 4", () => {
  expect(sub(8, 4)).toBe(4);
});

test("multiply 8 * 1 return 8", () => {
  expect(multiply(8, 1)).toBe(8);
});

test("divide 4 / 2 and returns 2", () => {
  expect(divide(4, 2)).toBe(2);
});
