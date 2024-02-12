/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  arr.sort((a, b) => a - b);
  const uniqueSet = new Set();

  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (uniqueSet.has(count)) {
        return false;
      }

      uniqueSet.add(count);
      count = 1;
    }
  }

  return !uniqueSet.has(count);
};

module.exports = uniqueOccurrences;
