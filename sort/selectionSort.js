const selectionSort = (inputArray) => {
  for (let currentIndex = 0; currentIndex < inputArray.length; currentIndex++) {
    for (
      let compareIndex = currentIndex + 1;
      compareIndex < inputArray.length;
      compareIndex++
    ) {
      if (inputArray[currentIndex] > inputArray[compareIndex]) {
        let temp = inputArray[currentIndex];
        inputArray[currentIndex] = inputArray[compareIndex];
        inputArray[compareIndex] = temp;
      }
    }
  }
  return inputArray;
};
module.exports = selectionSort;
