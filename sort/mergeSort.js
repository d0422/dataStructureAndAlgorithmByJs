const mergeSort = (inputArray, left, right) => {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(inputArray, left, mid);
    mergeSort(inputArray, mid + 1, right);
    merge(inputArray, left, mid, right);
  }
};
const merge = (inputArray, left, mid, right) => {
  let i = left;
  let j = mid + 1;
  let k = left;
  const sortedArray = Array.from({ length: right - left + 1 });
  while (i <= mid && j <= right) {
    if (inputArray[i] <= inputArray[j]) {
      sortedArray[k++] = inputArray[i++];
    } else {
      sortedArray[k++] = inputArray[j++];
    }
  }
  while (i <= mid) {
    sortedArray[k++] = inputArray[i++];
  }
  while (j <= right) {
    sortedArray[k++] = inputArray[j++];
  }
  for (let l = left; l <= right; l++) {
    inputArray[l] = sortedArray[l];
  }
};

const mergeExecute = (inputArray) => {
  mergeSort(inputArray, 0, inputArray.length - 1);
  return inputArray;
};

module.exports = mergeExecute;
