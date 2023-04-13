const Queue = require('../dataStructure/queue/Queue');
const radixSort = (inputValue) => {
  const maxValue = Math.max(...inputValue);
  const digit = String(maxValue).split('').length;
  const zeroToNine = Array.from({ length: 10 }).map(() => new Queue());
  let result = [...inputValue];
  for (let x = 1; x < digit + 1; x++) {
    result.forEach((number) => {
      const string = String(number).split('');
      let index = string.length >= x ? string[string.length - x] : 0;
      zeroToNine[index].inqueue(number);
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
