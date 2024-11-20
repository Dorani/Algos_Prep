// Example 1: Given a string s, return true if it is a palindrome, false otherwise.

// A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

// We can use the two pointers technique here to check that all corresponding characters are equal.
// To start, we check the first and last characters using two separate pointers. To check the next pair of characters, we just need to move our pointers toward each other one position.
// We continue until the pointers meet each other or we find a mismatch.

/**
 * @param {string} s
 * @return {boolean}
 */
const checkIfPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// Notice that if the input was an array of characters instead of a string, the algorithm wouldn't change.
// The two pointers technique works as long as the index variables are moving along some abstract iterable.

// This algorithm is very efficient as not only does it run in

// O(n), but it also uses only
// O(1) space. No matter how big the input is, we always only use two integer variables.

// The time complexity is:
// O(n) because the while loop iterations cost
// O(1) each, and there can never be more than

// O(n) iterations of the while loop - the pointers start at a distance of 𝑛
// n from each other and move closer by one step each iteration.
