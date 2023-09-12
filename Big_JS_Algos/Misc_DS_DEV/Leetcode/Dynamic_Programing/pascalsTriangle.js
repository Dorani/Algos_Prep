//Recursive Approach

// Input: numRows = 5
// Output: [[1],
//         [1,1],
//        [1,2,1],
//       [1,3,3,1],
//      [1,4,6,4,1]]


// If numRows is 0, we return an empty array.
// If numRows is 1, we return [[1]].
// Otherwise, we recursively generate the triangle for numRows - 1.
// Then, we compute the new row by adding up the pairs of adjacent values from the last row in the previously computed triangle.
// Finally, we append the new row to the triangle and return it.

function generate(numRows) {
    // Base case
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    // Recursive case
    const previousRows = generate(numRows - 1);
    const lastRow = previousRows[previousRows.length - 1];
    const newRow = [1];

    for (let i = 0; i < lastRow.length - 1; i++) {
        newRow.push(lastRow[i] + lastRow[i + 1]);
    }

    newRow.push(1);
    previousRows.push(newRow);

    return previousRows;
}

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]




