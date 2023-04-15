const BinaryTree = require('../dataStructure/tree/BinaryTree');
const inOrder = require('../dataStructure/tree/inOrder');
const postOrder = require('../dataStructure/tree/postOrder');
const preOrder = require('../dataStructure/tree/preOrder');

test('전위순회 테스트', () => {
  const inputArray = [7, 5, 10, 2, 1, 3];
  const output = [[7], [5], [2], [1], [3], [10]];
  const consoleSpy = jest.spyOn(console, 'log');
  preOrder(inputArray);
  expect(consoleSpy.mock.calls).toEqual(output);
  consoleSpy.mockClear();
});

test('중위순회 테스트', () => {
  const inputArray = [7, 5, 10, 2, 1, 3];
  const output = [[1], [2], [3], [5], [7], [10]];
  const consoleSpy = jest.spyOn(console, 'log');
  inOrder(inputArray);
  expect(consoleSpy.mock.calls).toEqual(output);
  consoleSpy.mockClear();
});

test('후위순회 테스트', () => {
  const inputArray = [7, 5, 10, 2, 1, 3];
  const output = [[10], [3], [1], [2], [5], [7]];
  const consoleSpy = jest.spyOn(console, 'log');
  postOrder(inputArray);
  expect(consoleSpy.mock.calls).toEqual(output);
  consoleSpy.mockClear();
});

test('트리 삭제 테스트,  루트인경우', () => {
  const inputArray = [7, 5, 10, 2, 1, 3];
  const output = [[1], [2], [3], [5], [10]];
  const consoleSpy = jest.spyOn(console, 'log');
  const tree = new BinaryTree();
  inputArray.forEach((number) => {
    tree.add(number);
  });
  tree.delete(7);
  tree.inOrder(tree.root);
  expect(consoleSpy.mock.calls).toEqual(output);
  consoleSpy.mockClear();
});

test('트리 삭제 테스트, 자식노드가 둘인 경우', () => {
  const inputArray = [7, 5, 10, 2, 1, 3];
  const output = [[1], [2], [3], [7], [10]];
  const consoleSpy = jest.spyOn(console, 'log');
  const tree = new BinaryTree();
  inputArray.forEach((number) => {
    tree.add(number);
  });
  tree.delete(5);
  tree.inOrder(tree.root);
  expect(consoleSpy.mock.calls).toEqual(output);
  consoleSpy.mockClear();
});

test('트리 삭제 테스트, 자식노드가 왼쪽 하나인 경우', () => {
  const inputArray = [7, 5, 10, 2, 1, 3];
  const output = [[1], [3], [5], [7], [10]];
  const consoleSpy = jest.spyOn(console, 'log');
  const tree = new BinaryTree();
  inputArray.forEach((number) => {
    tree.add(number);
  });
  tree.delete(2);
  tree.inOrder(tree.root);
  expect(consoleSpy.mock.calls).toEqual(output);
  consoleSpy.mockClear();
});
