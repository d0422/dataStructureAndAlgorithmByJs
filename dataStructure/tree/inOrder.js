const BinaryTree = require('./BinaryTree');
const inOrder = (inputArray) => {
  const binaryTree = new BinaryTree();
  inputArray.forEach((number) => {
    binaryTree.add(number);
  });
  binaryTree.inOrder(binaryTree.root);
};
module.exports = inOrder;
