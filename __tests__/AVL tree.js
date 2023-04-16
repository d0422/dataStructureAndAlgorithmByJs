const AVLTree = require('../dataStructure/tree/AVL/AVLTree');
test('AVL 트리 BF테스트 1', () => {
  const avl = new AVLTree();
  [1, 2, 3, 4, 5].forEach((num) => {
    avl.add(num);
  });
  expect([avl.root.BF, avl.root.right.BF]).toEqual([-4, -3]);
});

test('AVL 트리 BF테스트 ', () => {
  const avl = new AVLTree();
  [2, 1, 3].forEach((num) => {
    avl.add(num);
  });
  expect([avl.root.BF, avl.root.right.BF, avl.root.left.BF]).toEqual([0, 0, 0]);
});

test('AVL 트리 BF테스트 ', () => {
  const avl = new AVLTree();
  [2, 1, 4, 3, 5].forEach((num) => {
    avl.add(num);
  });
  expect([avl.root.BF, avl.root.right.BF, avl.root.left.BF]).toEqual([
    -1, 0, 0,
  ]);
});
