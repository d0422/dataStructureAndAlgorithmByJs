const BinaryNode = require('./BinaryNode');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) this.root = new BinaryNode(value);
    else {
      let currentNode = this.root;
      while (currentNode.left != null && currentNode.right != null) {
        if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else {
          currentNode.currentNode.right;
        }
      }
      if (currentNode.value < value) {
        currentNode.right = new BinaryNode(value);
      } else {
        currentNode.left = new BinaryNode(value);
      }
    }
  }
  preOrder(currentNode) {
    console.log(currentNode);
    if (currentNode.left) {
      this.preOrder(currentNode.left);
    }
    if (currentNode.right) {
      this.preOrder(currentNode.right);
    }
  }

  inOrder(currentNode) {
    if (currentNode.left) {
      this.inOrder(currentNode.left);
    }
    console.log(currentNode.value);
    if (currentNode.right) {
      this.inOrder(currentNode.right);
    }
  }

  postOrder(currentNode) {}
}
module.exports = BinaryTree;
