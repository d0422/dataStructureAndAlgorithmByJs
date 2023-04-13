const Heap = require('../dataStructure/heap/Heap.js');
const heapSort = (inputValue) => {
  const heap = new Heap();
  inputValue.forEach((number) => {
    heap.add(number);
  });
  const result = [];
  while (!heap.isEmpty()) {
    result.push(heap.pop());
  }
  return result;
};
module.exports = heapSort;
