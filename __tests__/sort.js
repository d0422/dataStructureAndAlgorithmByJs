const selectionSort = require('../sort/selectionSort');

test('선택정렬 테스트', () => {
  expect(selectionSort([5, 3, 1])).toEqual([1, 3, 5]);
});
