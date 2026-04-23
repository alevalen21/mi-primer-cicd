// test.js — Le preguntamos a Jest: ¿nuestra función sumar funciona bien?

const { sumar } = require('./app');

test('2 + 3 debe ser igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('0 + 0 debe ser igual a 0', () => {
  expect(sumar(0, 0)).toBe(0);
});