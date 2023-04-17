const BinaryNode = require('../BST/BinaryNode');

class RedBlackNode extends BinaryNode {
  constructor(value, parent = null) {
    super(value);
    this.color = 'red';
    this.parent = parent;
  }
}
module.exports = RedBlackNode;
