const insertSort = (inputArray) => {
  for (let index = 1; index < inputArray.length; index++) {
    let key = inputArray[index];
    let currentIndex = index;
    while (currentIndex > 0 && inputArray[currentIndex - 1] > key) {
      inputArray[currentIndex] = inputArray[currentIndex - 1];
      currentIndex--;
    }
    inputArray[currentIndex] = key;
  }
  return inputArray;
};

module.exports = insertSort;
