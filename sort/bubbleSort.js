const bubbleSort = (inputArray) => {
  for (let x = 0; x < inputArray.length; x++) {
    for (
      let currentIndex = 0;
      currentIndex < inputArray.length - 1;
      currentIndex++
    ) {
      if (inputArray[currentIndex] > inputArray[currentIndex + 1]) {
        let temp = inputArray[currentIndex + 1];
        inputArray[currentIndex + 1] = inputArray[currentIndex];
        inputArray[currentIndex] = temp;
      }
    }
  }
  return inputArray;
};

module.exports = bubbleSort;
