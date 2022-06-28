var { sum, sub, multiply, divide } = require("../functions/calculator.js");
var { numbers } = require("../data/numbers.js");
var { users } = require("../data/users.js");

test("atribuição de objeto", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("consultando um objeto", () => {
  expect(numbers).toEqual({ one: 1 });
});

test("atribuindo para um objeto existente", () => {
  numbers["three"] = 3;
  expect(numbers).toEqual({ one: 1, three: 3 });
});

test("verificando se o vetor de usuarios não é igual a:", () => {
  expect(users).not.toEqual([{ id: 1, name: "Taiza", age: "89" }]);
});

test("verificando de o vetor de usuarios é igual a:", () => {
  expect(users).toEqual([
    { name: "Taiza", age: "21" },
    { name: "John", age: "28" },
  ]);
});
