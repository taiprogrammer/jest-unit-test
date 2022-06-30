var { ages } = require("../data/ages.js");
var { users } = require("../data/users.js");
var { numbers } = require("../data/numbers.js");

// Common Matchers

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

// True

test("nulo", () => {
  const n = null;
  expect(n).toBeNull();
});

test("verificando se o vetor de usuário não está nulo", () => {
  expect(users).not.toBeNull();
});

test("verificando se o vetor de usuarios está definido", () => {
  expect(users).toBeDefined();
});

test("verificando se o vetor de usuarios não está indefinido", () => {
  expect(users).not.toBeUndefined();
});

test("verificando se o usuario está logado", () => {
  const logged = true;
  expect(logged).toBeTruthy();
});

test("verificando se o usuário não está logado", () => {
  const logged = false;
  expect(logged).toBeFalsy();
});

//Numbers matchers

test("verificando se a idade 10 + 90 dá 100", () => {
  const sum = 10 + 90;
  expect(sum).toBe(100);
});

test("verificando se o resultado de 100 + 50 é maior que 130", () => {
  const sum = 100 + 50;
  expect(sum).toBeGreaterThan(130);
});

test("verificando se o resultado de 90 + 80 é maior ou igual à 170", () => {
  const sum = 90 + 80;
  expect(sum).toBeGreaterThanOrEqual(170);
});

test("verificando se 10 - 5 é menor que 6", () => {
  const sub = 10 - 5;
  expect(sub).toBeLessThan(6);
});

test("verificando se 10 - 2 é menor ou igual à 8", () => {
  const sub = 10 - 2;
  expect(sub).toBeLessThanOrEqual(8);
});

// Strings

test("verificando se existe 'aiz' dentro de 'Taiza'", () => {
  const name = "Taiza";
  expect(name).toMatch(/aiz/);
});

test("verificando se não existe 'aiz' dentro de 'João'", () => {
  const name = "João";
  expect(name).not.toMatch(/aiz/);
});
