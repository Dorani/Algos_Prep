/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s;

  let str1 = s.split("");
  let len = s.length;

  let arr = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    arr[i] = "";
  }

  let row = 0;
  let reverse = true;

  for (let i = 0; i < len; i++) {
    arr[row] += str1[i];

    if (row === numRows - 1) {
      reverse = false;
    } else if (row === 0) {
      reverse = true;
    }

    if (reverse) {
      row++;
    } else {
      row--;
    }
  }

  return arr.join("");
};

const s = "ABCDEFG",
  numRows = 3;

console.log(s);

convert(s, numRows);
