// Given an integer x, return true if x is a
// palindrome and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const isPalindrome = (x) => {
  let reverse = 0;
  let max = Infinity;
  let temp = x;

  while (temp !== 0 && Math.abs(reverse) < max / 10) {
    let lastDigit = (temp % 10);
    reverse = (reverse * 10) + lastDigit;
    temp = Math.floor(temp / 10);
  }

  return x === reverse;
};

let x = 121;
console.log(isPalindrome(x));
