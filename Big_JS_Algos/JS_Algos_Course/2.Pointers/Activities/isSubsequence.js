// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings
//and checks whether the characters in the first string form a
//subsequence of the characters in the second string.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (str1.length === 0) return true;
  while (j < str2.length) {
    let char1 = str1[i];
    let char2 = str2[j];

    char1 === char2 ? i++ : j++;
    return true;
  }
  return false;
}
