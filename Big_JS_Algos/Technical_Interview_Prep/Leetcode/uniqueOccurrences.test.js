const uniqueOccurrences = require("./Frequency_Counter/uniqueOccurrences");

describe("uniqueOccurrences", () => {
  test("returns false for array with unique single occurrences, ie if each element's frequecy is equal other", () => {
    const arr = [1, 2, 3, 4];
    expect(uniqueOccurrences(arr)).toBe(false);
  });

  test("returns true for array with non-unique occurrences", () => {
    const arr = [1, 2, 2, 3, 3, 3];
    expect(uniqueOccurrences(arr)).toBe(true);
  });

  test("returns true for empty array", () => {
    const arr = [];
    expect(uniqueOccurrences(arr)).toBe(true);
  });

  test("returns true for single-element array", () => {
    const arr = [42];
    expect(uniqueOccurrences(arr)).toBe(true);
  });
});
