const caesarCipher = (string, key = 1) => {
  let cipheredArray = [];
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  if (!string) throw new Error();

  let splitString = string.split('');

  for (const letter of splitString) {
    let cipheredIndex = alphabet.indexOf(letter.toLowerCase()) + key;
    if (alphabet.includes(letter.toLowerCase())) {
      if (letter == letter.toUpperCase()) {
        if (cipheredIndex > alphabet.length - 1) {
          cipheredIndex = cipheredIndex - alphabet.length;
        }
        cipheredArray.push(alphabet[cipheredIndex].toUpperCase());
      } else if (letter == letter.toLowerCase()) {
        if (cipheredIndex > alphabet.length - 1) {
          cipheredIndex = cipheredIndex - alphabet.length;
        }
        cipheredArray.push(alphabet[cipheredIndex])
      }
    } else {
      cipheredArray.push(letter)
    }
  }

  return cipheredArray.join('');
}

// console.log(caesarCipher('aimeN', 5))

export default caesarCipher;