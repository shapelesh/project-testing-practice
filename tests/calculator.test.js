import calculator from '../JS/calculator.js';

test('addition', () => {
  expect(calculator().add(2, 2)).toBe(4);
})

test('multiplication', () => {
  expect(calculator().multiply(2, 2)).toBe(4);
})

test('subtraction', () => {
  expect(calculator().subtract(2, 2)).toBe(0);
})

test('division', () => {
  expect(calculator().divide(2, 2)).toBe(1);
})