class Heap {
  constructor() {
    this.heap = [];
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  getSmaller(arr, i, j) {
    if (arr[i] < arr[j]) {
      return i;
    } else {
      return j;
    }
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  add(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      this.heap[parentIndex] &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
  pop() {
    const [root] = this.heap;
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let currentIndex = 0;
    let leftIndex = 1;
    let rightIndex = 2;
    while (
      (this.heap[leftIndex] &&
        this.heap[leftIndex] < this.heap[currentIndex]) ||
      (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[currentIndex])
    ) {
      if (this.heap[leftIndex] && this.heap[rightIndex]) {
        const smaller = this.getSmaller(this.heap, leftIndex, rightIndex);
        this.swap(smaller, currentIndex);
        currentIndex = smaller;
      } else if (this.heap[leftIndex]) {
        this.swap(leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else {
        this.swap(rightIndex, currentIndex);
        currentIndex = rightIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return root;
  }
}
module.exports = Heap;
