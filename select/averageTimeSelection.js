const averageTimeSelection = (inputArray, start, end, i) => {
  if (start >= end) return inputArray[start];
  const index = partition(inputArray, start, end);
  const rank = inputArray.length - index;
  if (rank === i) return inputArray[index];
  else if (rank < i)
    return averageTimeSelection(inputArray, start, index - 1, i);
  else return averageTimeSelection(inputArray, index + 1, end, i);
};

const partition = (inputArray, start, end) => {
  const pivot = inputArray[start];
  let left = start;
  let right = end;
  while (left < right) {
    while (pivot < inputArray[right]) right--;
    while (left < right && pivot >= inputArray[left]) left++;

    if (left < right && inputArray[left] > inputArray[right]) {
      const temp = inputArray[left];
      inputArray[left] = inputArray[right];
      inputArray[right] = temp;
    }
  }
  const temp = inputArray[right];
  inputArray[right] = pivot;
  inputArray[start] = temp;

  return right;
};
module.exports = averageTimeSelection;
