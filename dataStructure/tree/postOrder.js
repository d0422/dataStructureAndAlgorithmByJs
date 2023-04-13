const BinaryTree = require('./BinaryTree');

const postOrder = (inputArray) => {
  const tree = new BinaryTree();
  inputArray.forEach((number) => {
    tree.add(number);
  });
  tree.postOrder(tree.root);
};
module.exports = postOrder;
