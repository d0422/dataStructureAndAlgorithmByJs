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

test('레드블랙 트리 테스트', () => {
  const tree = new RedBlackTree();
  [10, 5, 20, 3, 7, 15, 25, 1, 4].forEach((num) => {
    tree.add(num);
  });
  expect([
    tree.root.color,
    tree.root.left.color,
    tree.root.right.color,
    tree.root.left.left.color,
    tree.root.left.right.color,
    tree.root.left.left.left.color,
    tree.root.left.left.right.color,
    tree.root.right.left.color,
    tree.root.right.right.color,
    tree.root.value,
    tree.root.left.value,
    tree.root.right.value,
    tree.root.left.left.value,
    tree.root.left.right.value,
    tree.root.left.left.left.value,
    tree.root.left.left.right.value,
    tree.root.right.left.value,
    tree.root.right.right.value,
  ]).toEqual([
    'black',
    'red',
    'black',
    'black',
    'black',
    'red',
    'red',
    'red',
    'red',
    10,
    5,
    20,
    3,
    7,
    1,
    4,
    15,
    25,
  ]);
});
