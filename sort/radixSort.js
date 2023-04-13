const Queue = require('../dataStructure/queue/Queue');
const radixSort = (inputValue) => {
  const maxValue = Math.max(...inputValue);
  const digit = String(maxValue).split('').length;
  const zeroToNine = Array.from({ length: 10 }).map(() => new Queue());
  let result = [...inputValue];
  for (let x = 0; x < digit; x++) {
    result.forEach((number) => {
      zeroToNine[number % 10 ** x].inqueue(number);
    });
    result = [];
    zeroToNine.forEach((q) => {
      while (!q.isEmpty()) {
        result.push(q.dequeue());
      }
    });
  }
  return result;
};

module.exports = radixSort;
