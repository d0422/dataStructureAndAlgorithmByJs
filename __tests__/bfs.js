const bfsInput = require('../graph/bfs');

test('dfs테스트', () => {
  const graph = [[1, 2], [3, 0], [1]];
  expect(bfsInput(graph, 4)).toEqual([0, 1, 2, 3]);
});

test('dfs테스트', () => {
  const graph = [[2], [3, 0], [3], [4, 5], [1]];
  expect(bfsInput(graph, 6)).toEqual([0, 2, 3, 4, 5, 1]);
});
