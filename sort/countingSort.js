const countingSort = (inputArray) => {
  const maxNumber = Math.max(...inputArray);
  const result = [];
  const countArray = Array.from({ length: maxNumber + 1 }).map(() => 0);
  inputArray.forEach((num) => {
    countArray[num]++;
  });
  countArray.forEach((numberCount, index) => {
    for (let x = 0; x < numberCount; x++) {
      result.push(index);
    }
  });
  return result;
};

module.exports = countingSort;
