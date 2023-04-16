const ABLNode = require('./AVLNode');
class AVLTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new ABLNode(value);
    } else {
      this.root = this.appendNode(this.root, value);
      this.rebalance(this.root);
    }
  }
  appendNode(root, value) {
    if (root == null) {
      root = new ABLNode(value);
    } else {
      if (value > root.value) {
        root.right = this.appendNode(root.right, value);
      }
      if (value < root.value) {
        root.left = this.appendNode(root.left, value);
      }
    }
    root = this.rebalance(root);
    return root;
  }

  rightRotate(node) {
    const root = node.left;
    const rightNodes = root.right;

    root.right = node;
    node.left = rightNodes;
    return root;
  }
  leftRotate(node) {
    const root = node.right;
    const leftNodes = root.left;
    root.left = node;
    node.right = leftNodes;
    return root;
  }
  rebalance(node) {
    if (node.BF > 1 && node.left) {
      if (node.left.left) {
        node = this.rightRotate(node);
      } else {
        node.left = this.leftRotate(node.left);
        node = this.rightRotate(node);
      }
    }
    if (node.BF < -1 && node.right) {
      if (node.right.right) {
        node = this.leftRotate(node);
      } else {
        node.right = this.rightRotate(node.right);
        node = this.leftRotate(node);
      }
    }
    return node;
  }
}

module.exports = AVLTree;
