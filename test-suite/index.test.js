const { sum } = require('../challenge/index.js'); // would have to look for the submission file somehow

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
