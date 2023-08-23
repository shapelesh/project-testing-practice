import caesarCipher from '../JS/caesarCipher.js'

test('Caesar cipher: aa toBe bb', () => {
  expect(caesarCipher('aa', 1)).toBe('bb');
})

test('Caesar cipher: zZ toBe aA', () => {
  expect(caesarCipher('zZ', 1)).toBe('aA');
})

test('Caesar cipher: az toBe ba', () => {
  expect(caesarCipher('az', 1)).toBe('ba');
})

test('Caesar cipher: az:craZZy toBe ba:dsbAAz', () => {
  expect(caesarCipher('az:craZZy', 1)).toBe('ba:dsbAAz');
})

test('Caesar cipher: toThrow on empty string', () => {
  expect(() => {
    caesarCipher('', 1)
  }).toThrow();
})