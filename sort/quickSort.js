const QuickSort = (inputArray, start, end) => {
  if (start >= end) return;
  const partition = getPartition(inputArray, start, end);
  QuickSort(inputArray, start, partition - 1);
  QuickSort(inputArray, partition + 1, end);
};

const getPartition = (inputArray, start, end) => {
  const pivot = inputArray[start];
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (left <= end && inputArray[left] <= pivot) left++;
    while (right > start && inputArray[right] > pivot) right--;

    if (left < right) {
      const temp = inputArray[left];
      inputArray[left] = inputArray[right];
      inputArray[right] = temp;
    }
  }

  inputArray[start] = inputArray[right];
  inputArray[right] = pivot;
  return right;
};

const QuickSortExecute = (inputArray) => {
  QuickSort(inputArray, 0, inputArray.length - 1);
  return inputArray;
};
module.exports = QuickSortExecute;
