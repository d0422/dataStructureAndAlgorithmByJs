const 버블정렬 = require('../sort/bubbleSort');
const 힙정렬 = require('../sort/heapSort');
const 삽입정렬 = require('../sort/insertSort');
const 합병정렬 = require('../sort/mergeSort');
const 퀵정렬 = require('../sort/quickSort');
const 선택정렬 = require('../sort/selectionSort');
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

const testFunction = [선택정렬, 삽입정렬, 버블정렬, 합병정렬, 퀵정렬, 힙정렬];
testFunction.forEach((func) => {
  testData.forEach((testData, index) => {
    test(`${func.name} 테스트 ${index}`, () => {
      expect(func(testData.testInput)).toEqual(testData.testAnswer);
    });
  });
});
