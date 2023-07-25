// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// const lengthOfLongestSubstring = (str) => {
//     let left = str[0];
//     let right = str[1];
//     let total;
//     let start = 2;

//     if(str.length === 0) return 0;
//     if(str.length === 1 || str.trim() === "") return 1;

//     if((str.length === 2) && (left === right)) {
//         total += 1;
//     } else if(str.length > start) {
//         for(let i = 0; i <= str.length; i++) {
//             total = start;
//             if(left === right) {
//                 left++;
//                 right++;
//                 if(left != right) return 1;
//             }
//             if(right != right[i+2]) {
//                 total++;
//                 right = right[i+2];
//                 right++;
//             }
//         }
//     }
//     return total;
// }

// const lengthOfLongestSubstring = (str) => {
//   let maxTotal = 0;
//   let tempTotal = 0;
//   let left = 0;
//   let right = 1;

//   if (str.length === 0) return 0;
//   if (str.length === 1 || str.trim() === "") return maxTotal;

//   for (let i = 0; i < str.length; i++) {
//     if(str[i] != str[right] && str[left] != str[right]) {
//         maxTotal++;
//         right++
//     } else {
//         right += 2;
//         left = right - 1;
//         maxTotal = tempTotal;
//         maxTotal = Math.max(maxTotal, tempTotal);
//     }
//   }

//   return maxTotal;
// };
// const s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s));

//Hash Table
// const lengthOfLongestSubstring = (s) => {
//     let result = 0;
//     let offset = 0;

//     let positions = {};

//     for(let i = 0; i < s.length; i++) {
//         const pos = positions[s[i]];

//         if(pos != undefined && pos >= offset) {
//             result = Math.max(i - offset, result);
//             offset = pos + 1;
//         }

//         positions[s[i]] = i;
//     }

//     return Math.max(s.length - offset, result)
// }

//Sliding window
// For example, in "abbc":

// left = 0, right = 0, s[right] = a, s[left] = a

// set does not contain a, add to set
// set = [a]
// Update maxLength to 1
// Increment right
// left = 0, right = 1, s[right] = b, s[left] = a

// set does not contain b, add to set
// set = [a, b]
// Update maxLength to 2
// Increment right
// left = 0, right = 2, s[right] = b, s[left] = a

// set already contains b
// Delete s[left] from set
// set = [b]
// Increment left
// left = 1, right = 2, s[right] = b, s[left] = b

// set already contains b
// Delete s[left] from set
// set = []
// Increment left
// left = 2, right = 2, s[right] = b, s[left] = b

// set does not contain b, add to set
// set = [b]
// maxLength does not change, since 1 < 2
// Increment right
// left = 2, right = 3, s[right] = c, s[left] = b

// set does not contain c, add to set
// set = [b, c]
// maxLength does not change, since 2 === 2
// Increment right
// right = 4, which is out of bounds of the while loop

// Exit loop and return maxLength
const lengthOfLongestSubstring = (s) => {
  if (!s.length) return 0;

  let left = 0,
    right = 0;
  let maxLength = -Infinity;
  const set = new Set();

  while (right < s.length) {
    // If s[right] has not been seen yet
    if (!set.has(s[right])) {
      // Add it to the set
      set.add(s[right]);
      // Increase size of window to right
      right++;
      // Update maxLength; set size represents length of unique substring
      maxLength = Math.max(maxLength, set.size);
    } else {
      // We've seen s[right] so we need to shrink the window
      // Delete s[left] from set
      set.delete(s[left]);
      // Shrink window from left
      left++;
    }
    console.log(set);
  }

  return maxLength;
};

const str = "abcabb";
console.log(lengthOfLongestSubstring1(str));
