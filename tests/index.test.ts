import { add } from '../src/index';
// Test suite for the index file
describe('testing index file', () => {
  // Test case within the test suite
  test('empty string should result in zero', () => {
    // Assertion in the test case
    // Expects the add function to return 0 when an empty string is passed as an argument
    expect(add('')).toBe(0);
  });
});