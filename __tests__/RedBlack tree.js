const RedBlackTree = require('../dataStructure/tree/RedBlackTree/RedBlackTree');
test('레드블랙트리 restructuring 테스트', () => {
  const tree = new RedBlackTree();
  [5, 2, 3, 7].forEach((num) => {
    tree.add(num);
  });
  expect([
    tree.root.color,
    tree.root.left.color,
    tree.root.right.color,
    tree.root.right.right.color,
    tree.root.value,
    tree.root.left.value,
    tree.root.right.value,
    tree.root.right.right.value,
  ]).toEqual(['black', 'black', 'black', 'red', 3, 2, 5, 7]);
});

test('레드블랙트리 recoloring 테스트', () => {
  const tree = new RedBlackTree();
  [5, 2, 7, 3].forEach((num) => {
    tree.add(num);
  });
  expect([
    tree.root.color,
    tree.root.left.color,
    tree.root.right.color,
    tree.root.left.right.color,
    tree.root.value,
    tree.root.left.value,
    tree.root.right.value,
    tree.root.left.right.value,
  ]).toEqual(['black', 'black', 'black', 'red', 5, 2, 7, 3]);
});
