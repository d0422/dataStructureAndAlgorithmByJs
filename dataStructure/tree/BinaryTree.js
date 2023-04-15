const BinaryNode = require('./BinaryNode');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) this.root = new BinaryNode(value);
    else {
      let currentNode = this.root;
      while (
        (currentNode.left != null && currentNode.value > value) ||
        (currentNode.right != null && currentNode.value < value)
      ) {
        while (currentNode.value > value && currentNode.left != null) {
          currentNode = currentNode.left;
        }
        while (currentNode.value < value && currentNode.right != null) {
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
    if (this.root.value === value && !this.root.left && !this.root.right) {
      this.root = null;
      return;
    } else {
      this.deleteNode(this.root, value);
    }
  }

  getMinNode(node) {
    let current = node;
    while (current.left != null) {
      current = current.left;
    }
    return current;
  }

  deleteNode(currentNode, value) {
    if (currentNode.value < value) {
      currentNode.right = this.deleteNode(currentNode.right, value);
    } else if (currentNode.value > value) {
      currentNode.left = this.deleteNode(currentNode.left, value);
    } else {
      if (!currentNode.left) {
        return currentNode.right;
      }
      if (!currentNode.right) {
        return currentNode.left;
      }
      const minNode = this.getMinNode(currentNode.right);
      currentNode.value = minNode.value;
      currentNode.right = this.deleteNode(currentNode.right, minNode.value);
    }
    return currentNode;
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
