const uniqueOccurrences = require("./uniqueOccurrences");

describe("uniqueOccurrences", () => {
  test("returns true for array with unique occurrences", () => {
    const arr = [1, 2, 3, 4];
    console.log(uniqueOccurrences(arr)); // Logging the result
    expect(uniqueOccurrences(arr)).toBe(false);
  });

  test("returns false for array with non-unique occurrences", () => {
    const arr = [1, 2, 2, 3, 3, 3];
    console.log(uniqueOccurrences(arr)); // Logging the result
    expect(uniqueOccurrences(arr)).toBe(true);
  });

  test("returns true for empty array", () => {
    const arr = [];
    console.log(uniqueOccurrences(arr)); // Logging the result
    expect(uniqueOccurrences(arr)).toBe(true);
  });

  test("returns true for single-element array", () => {
    const arr = [42];
    console.log(uniqueOccurrences(arr)); // Logging the result
    expect(uniqueOccurrences(arr)).toBe(true);
  });
});
