// Code Breakdown:
// const fibWithTabulation = (N) => {: This defines a function called fibWithTabulation that takes an integer N as input.

// const table = Array.from({ length: N + 1 }).fill(0);: This line creates an array called table with a length of N + 1 and fills it with zeros. The purpose of this array is to store the Fibonacci numbers for each index from 0 to N.

// table[1] = 1;: This line initializes the value at index 1 of the table array to 1 because the Fibonacci sequence starts with 0 and 1.

// for (let i = 0; i < table.length; i++) {: This loop iterates through the table array from index 0 to N.

// const currentValue = table[i];: Inside the loop, it stores the current value at index i of the table array in the currentValue variable.

// if (table[i+1] !== undefined) table[i+1] += currentValue;: This line adds the currentValue to the element at the next index (i+1) of the table array if it exists. This step represents calculating the Fibonacci number at index i+1 by adding the Fibonacci numbers at indices i and i-1.

// if (table[i+2] !== undefined) table[i+2] += currentValue;: Similarly, this line adds the currentValue to the element at the index i+2 of the table array if it exists. This step represents calculating the Fibonacci number at index i+2 by adding the Fibonacci numbers at indices i and i-2.

// return table[N];: Finally, the function returns the Fibonacci number at index N, which is stored in the table array.

// console.log(fibWithTabulation(4));: This line calls the fibWithTabulation function with an argument of 4 and logs the result, which is the 4th Fibonacci number.

// Tabulation vs. Memoization:
// Tabulation is a bottom-up approach where you start solving the problem by building a table or array from the base case(s) up to the desired solution. It doesn't use recursion and typically uses iteration, as seen in this code.

// Memoization, on the other hand, is a top-down approach that uses recursion and stores intermediate results (memoization) to avoid redundant calculations. It starts from the desired solution and recursively breaks down the problem into smaller subproblems, checking if they have already been solved before calculating them.

// Time Complexity:
// The time complexity of this tabulation-based Fibonacci algorithm is O(N), where N is the input value. This is because it iterates through the table array once, performing constant-time operations at each step.

// Space Complexity:
// The space complexity is O(N) as well because it creates an array of size N+1 to store the Fibonacci numbers.

// In summary, tabulation is a dynamic programming technique that builds a table to solve problems bottom-up, while memoization uses recursion and stores results top-down. Both techniques can be used to optimize Fibonacci calculations, with tabulation typically having a simpler and more efficient implementation.

const fibWithTabulation = (N) => {
  const table = Array.from({ length: N + 1 }).fill(0);
  table[1] = 1;
  for (let i = 0; i < table.length; i++) {
    const currentValue = table[i];
    if (table[i + 1] !== undefined) table[i + 1] += currentValue;
    if (table[i + 2] !== undefined) table[i + 2] += currentValue;
  }
  return table[N];
};

console.log(fibWithTabulation(4));
