const BinaryTree = require('./BST/BinarySearchTree');
const inOrder = (inputArray) => {
  const binaryTree = new BinaryTree();
  inputArray.forEach((number) => {
    binaryTree.add(number);
  });
  binaryTree.inOrder(binaryTree.root);
};
module.exports = inOrder;
