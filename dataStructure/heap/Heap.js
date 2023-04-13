class Heap {
  constructor() {
    this.heap = [];
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
    const [root, ...newArr] = this.heap;
    this.heap = [];
    newArr.forEach((number) => {
      this.add(number);
    });
    return root;
  }
}
const heap = new Heap();
[6, 2, 1, 4, 3].forEach((num) => {
  heap.add(num);
});
while (heap.heap.length != 0) {
  console.log(heap.pop());
}
