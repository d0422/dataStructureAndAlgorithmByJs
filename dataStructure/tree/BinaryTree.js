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
        while (currentNode.value > value && currentNode.left != null) {
          currentNode = currentNode.left;
        }
        while (currentNode.value <= value && currentNode.right != null) {
          currentNode = currentNode.right;
        }
      }
      if (currentNode.value < value) {
        currentNode.right = new BinaryNode(value);
      } else {
        currentNode.left = new BinaryNode(value);
      }
    }
  }

  delete(value) {
    let currentNode = this.root;
    while (currentNode.value != value) {
      if (currentNode.left == null && currentNode.right == null) {
        return null;
      }
      if (currentNode.value > value && currentNode.left != null) {
        currentNode = currentNode.left;
      }
      if (currentNode.value < value && currentNode.right != null) {
        currentNode = currentNode.right;
      }
      if (currentNode.value === value) {
      }
    }
  }

  preOrder(currentNode) {
    console.log(currentNode.value);
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

  postOrder(currentNode) {
    if (currentNode.right) {
      this.postOrder(currentNode.right);
    }
    if (currentNode.left) {
      this.postOrder(currentNode.left);
    }
    console.log(currentNode.value);
  }
}
module.exports = BinaryTree;
