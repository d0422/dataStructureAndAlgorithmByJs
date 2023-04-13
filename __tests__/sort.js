const bubbleSort = require('../sort/bubbleSort');
const heapSort = require('../sort/heapSort');
const insertSort = require('../sort/insertSort');
const mergeExecute = require('../sort/mergeSort');
const QuickSortExecute = require('../sort/quickSort');
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
  {
    testInput: [5, 3, 100, 1, 5, 99, 3, 22],
    testAnswer: [1, 3, 3, 5, 5, 22, 99, 100],
  },
];

test('선택정렬 테스트', () => {
  expect(selectionSort(testData[0].testInput)).toEqual(testData[0].testAnswer);
});

test('선택정렬 테스트2', () => {
  expect(selectionSort(testData[1].testInput)).toEqual(testData[1].testAnswer);
});
test('선택정렬 테스트3', () => {
  expect(selectionSort(testData[2].testInput)).toEqual(testData[2].testAnswer);
});

test('버블정렬 테스트', () => {
  expect(selectionSort(testData[0].testInput)).toEqual(testData[0].testAnswer);
});
test('버블정렬 테스트2', () => {
  expect(bubbleSort(testData[1].testInput)).toEqual(testData[1].testAnswer);
});
test('버블정렬 테스트3', () => {
  expect(bubbleSort(testData[2].testInput)).toEqual(testData[2].testAnswer);
});
test('삽입정렬 테스트', () => {
  expect(insertSort(testData[1].testInput)).toEqual(testData[1].testAnswer);
});

test('삽입정렬 테스트2', () => {
  expect(insertSort(testData[0].testInput)).toEqual(testData[0].testAnswer);
});
test('삽입정렬 테스트2', () => {
  expect(insertSort(testData[2].testInput)).toEqual(testData[2].testAnswer);
});

test('합병정렬 테스트', () => {
  expect(mergeExecute(testData[0].testInput)).toEqual(testData[0].testAnswer);
});
test('합병정렬 테스트2', () => {
  expect(mergeExecute(testData[1].testInput)).toEqual(testData[1].testAnswer);
});
test('합병정렬 테스트3', () => {
  expect(mergeExecute(testData[2].testInput)).toEqual(testData[2].testAnswer);
});
test('합병정렬 테스트4', () => {
  expect(mergeExecute([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
});

test('퀵정렬 테스트', () => {
  expect(QuickSortExecute([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
});
test('퀵정렬 테스트', () => {
  expect(QuickSortExecute([1, 3, 2, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});
test('퀵정렬 테스트', () => {
  expect(QuickSortExecute([5, 3, 1, 5, 3, 22])).toEqual([1, 3, 3, 5, 5, 22]);
});

test('퀵정렬 테스트', () => {
  expect(QuickSortExecute([5, 3, 100, 1, 5, 99, 3, 22])).toEqual([
    1, 3, 3, 5, 5, 22, 99, 100,
  ]);
});

test('힙소트 테스트', () => {
  expect(heapSort(testData[0].testInput)).toEqual(testData[0].testAnswer);
});
test('힙소트 테스트', () => {
  expect(heapSort(testData[1].testInput)).toEqual(testData[1].testAnswer);
});
test('힙소트 테스트', () => {
  expect(heapSort(testData[2].testInput)).toEqual(testData[2].testAnswer);
});
