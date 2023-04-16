const BinaryNode = require('../BST/BinaryNode');

class AVLNode extends BinaryNode {
  constructor(value) {
    super(value);
    this.BF = 0;
  }
  setBF() {
    if (!this.left && !this.right) {
      this.BF = 0;
    } else {
      const left = this.getHeight(this.left);
      const right = this.getHeight(this.right);
      this.BF = left - right;
    }
  }
  getHeight(node) {
    if (node === null) return 0;
    else {
      const left = this.getHeight(node.left);
      const right = this.getHeight(node.right);
      return Math.max(left, right) + 1;
    }
  }
}
module.exports = AVLNode;
