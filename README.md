# project: testing practice

## This project has the functions:

### Analyzing the array

```
const analyzeArray = (array) => {

  ...

  return {
    average: ((sortedArray) => {
      return sortedArray[sortedArray.length / 2]
    })(sortedArray),

    min: ((sortedArray) => {
      return sortedArray[0];
    })(sortedArray),

    max: ((sortedArray) => {
      return sortedArray[sortedArray.length - 1];
    })(sortedArray),

    length: ((sortedArray) => {
      return sortedArray.length;
    })(sortedArray),
  }
}
```

### Ciphering a string

```
const caesarCipher = (string, key = 1) => {
  let cipheredArray = [];

  ...

  return cipheredArray.join('');
}
```

### Basic calculator

```
const calculator = () => {

  ...

  return {
    add: (a, b) => {
      return a + b;
    },
    multiply: (a, b) => {
      return a * b;
    },
    subtract: (a, b) => {
      return a - b;
    },
    divide: (a, b) => {
      return a / b;
    }
  }
}
```

### Capitalizing a string

```
const capitalize = (string) => {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedString;
}
```

### Reversing a string

```
const reverseString = (string) => {
  let splitString = string.split('');
  let reversedString = splitString.reverse();
  let joinedString = reversedString.join('');
  return joinedString;
}
```

The functions were created through the process of TDD (Test-driven development)

## What is TDD?

Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.

## Tests

The repo has a 'tests' folder that contains the tests used to _test_ each function.
