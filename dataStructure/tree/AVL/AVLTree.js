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
      this.root.setBF();
    }
  }
  appendNode(root, value) {
    if (root == null) {
      root = new ABLNode(value);
    } else {
      if (value > root.value) {
        root.right = this.appendNode(root.right, value);
        root.right.setBF();
      }
      if (value < root.value) {
        root.left = this.appendNode(root.left, value);
        root.left.setBF();
      }
    }
    root.setBF();
    return root;
  }
}

module.exports = AVLTree;
