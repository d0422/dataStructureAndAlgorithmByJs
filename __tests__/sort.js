const selectionSort = require('../sort/selectionSort');

test('선택정렬 테스트', () => {
  expect(selectionSort([5, 3, 1])).toEqual([1, 3, 5]);
});

test('선택정렬 테스트2', () => {
  expect(selectionSort([5, 3, 1, 5, 3, 22])).toEqual([1, 3, 3, 5, 5, 22]);
});
