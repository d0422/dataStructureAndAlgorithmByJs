const BinaryTree = require('./BST/BinarySearchTree');

const preOrder = (inputArray) => {
  const binaryTree = new BinaryTree();
  inputArray.forEach((number) => {
    binaryTree.add(number);
  });
  binaryTree.preOrder(binaryTree.root);
};

module.exports = preOrder;
