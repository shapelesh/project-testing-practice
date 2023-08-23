const analyzeArray = (array) => {
  const sortedArray = _sortArray(array);

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

const _sortArray = (array) => {

  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = _sortArray(array.slice(0, mid));
  const right = _sortArray(array.slice(mid));
  return _merge(left, right);
}

const _merge = (left, right) => {

  let sortedArray = [];

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}


export default analyzeArray;