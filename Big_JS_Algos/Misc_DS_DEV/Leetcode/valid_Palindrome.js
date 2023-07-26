// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

//------------------------Breakdown----------------------------------//
//Slow approach, still looping from end-start to build out a new variable in memory that
//we will ultimately need to compare to
const isPalindrome = (s) => {
  let sentence = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  if (!sentence || sentence == " ") return true;

  let reversed = "";

  for (let i = sentence.length - 1; i >= 0; i--) {
    reversed += sentence[i];
  }

  return reversed === sentence;
};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));

//------------------------Breakdown----------------------------------//
//2 pointer Approach:
//if both ends are equal, gradually check with same logic,
// until its not, much faster, less taxing on memory
const isPalindromeV1 = (s) => {
  let sentence = s.toLowerCase().replace(/[^0-9a-z]/gi, "");

  let left = 0;
  let right = sentence.length - 1;

  while (left < sentence.length) {
    if (sentence[left] !== sentence[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};
