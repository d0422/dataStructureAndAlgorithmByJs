const inOrder = require('../tree/inOrder');
const preOrder = require('../tree/preOrder');

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
