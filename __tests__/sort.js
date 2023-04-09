const bubbleSort = require('../sort/bubbleSort');
const insertSort = require('../sort/insertSort');
const selectionSort = require('../sort/selectionSort');
const testData = [
  {
    testInput: [5, 3, 1],
    testAnswer: [1, 3, 5],
  },
  {
    testInput: [5, 3, 1, 5, 3, 22],
    testAnswer: [1, 3, 3, 5, 5, 22],
  },
];

test('선택정렬 테스트', () => {
  expect(selectionSort(testData[0].testInput)).toEqual(testData[0].testAnswer);
});

test('선택정렬 테스트2', () => {
  expect(selectionSort(testData[1].testInput)).toEqual(testData[1].testAnswer);
});

test('버블정렬 테스트', () => {
  expect(selectionSort(testData[0].testInput)).toEqual(testData[0].testAnswer);
});
test('버블정렬 테스트', () => {
  expect(bubbleSort(testData[1].testInput)).toEqual(testData[1].testAnswer);
});

test('삽입정렬 테스트', () => {
  expect(insertSort(testData[1].testInput)).toEqual(testData[1].testAnswer);
});

test('삽입정렬 테스트2', () => {
  expect(insertSort(testData[0].testInput)).toEqual(testData[0].testAnswer);
});
