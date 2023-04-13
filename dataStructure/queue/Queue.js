class Queue {
  constructor() {
    this.queue = [];
  }
  inqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    const [node, ...newQueue] = this.queue;
    this.queue = newQueue;
    return node;
  }
}
