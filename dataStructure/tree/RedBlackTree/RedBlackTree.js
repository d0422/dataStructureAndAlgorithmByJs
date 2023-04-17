const RedBlackNode = require('./RedBlackNode');

class RedBlackTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new RedBlackNode(value);
      this.root.color = 'black';
      return;
    }
    this.addNode(this.root, value);
    this.check(this.root);
  }
  addNode(node, value) {
    if (!node) {
      const newNode = new RedBlackNode(value);
      return newNode;
    }
    if (node.value > value) {
      node.left = this.addNode(node.left, value);
      node.left.parent = node;
    } else {
      node.right = this.addNode(node.right, value);
      node.right.parent = node;
    }

    return node;
  }
  check(root) {
    this.checkColor(root);
    if (root.left) {
      this.check(root.left);
    }
    if (root.right) {
      this.check(root.right);
    }
  }
  checkColor(node) {
    const parent = node.parent;
    if (!parent) return;
    const grand = parent.parent;
    if (!grand) return;

    const uncle = grand.left === parent ? grand.right : grand.left;
    if (parent.color === 'red') {
      if (!uncle || uncle.color === 'black') {
        this.restructuring(grand, parent, node);
      } else {
        this.recoloring(grand, parent, uncle);
      }
    }
  }

  restructuring(grand, parent, node) {
    const sortedArray = [grand, parent, node].sort((a, b) => a.value - b.value);
    const [first, middle, last] = sortedArray;
    this.removeLink([first, middle, last]);
    if (grand.parent) {
      if (grand.parent.left === grand) {
        grand.parent.left = middle;
      } else {
        grand.parent.right = middle;
      }
      middle.parent = grand.parent;
    } else {
      this.root = middle;
      middle.parent = null;
      middle.color = 'black';
    }
    //first요소 설정
    middle.left = first;
    first.parent = middle;
    first.color = 'red';
    //last요소 설정
    middle.right = last;
    last.parent = middle;
    last.color = 'red';
  }

  recoloring(grand, parent, uncle) {
    grand.color = 'red';
    parent.color = 'black';
    uncle.color = 'black';
    if (this.root === grand) {
      grand.color = 'black';
    }
    this.checkColor(grand);
  }

  removeLink(nodeArray) {
    nodeArray.forEach((node) => {
      nodeArray.forEach((compare) => {
        if (node.left === compare) {
          node.left = null;
        }
        if (node.right === compare) {
          node.right = null;
        }
      });
    });
  }
}
module.exports = RedBlackTree;
