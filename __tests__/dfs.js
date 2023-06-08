const input = require('../graph/dfs');

test('dfs테스트', () => {
  const graph = [[1, 2], [3, 0], [1]];
  expect(input(graph, 4)).toEqual([0, 1, 3, 2]);
});

test('dfs테스트', () => {
  const graph = [[2], [3, 0], [3], [4, 5], [1]];
  expect(input(graph, 6)).toEqual([0, 2, 3, 4, 1, 5]);
});
