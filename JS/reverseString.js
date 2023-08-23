const reverseString = (string) => {
  let splitString = string.split('');
  let reverseString = splitString.reverse();
  let joinedString = reverseString.join('');
  return joinedString;
}

export default reverseString;