// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

// Constraints:

// 1 <= s.length, goal.length <= 2 * 104
// s and goal consist of lowercase letters.

//Breakdown and analysis:
const buddyStrings = (s, goal) => {
  if (s.length !== goal.length) return false;

  //check for repeating characters
  if (s === goal) {
    const charSet = new Set(s);
    return charSet.size < s.length;
  }

  let diffCount = 0;
  let diffIndexes = [];

  for (let i = 0; i < s.length; i++) {
    //encounter characters that differ at the same index
    if (s[i] !== goal[i]) {
      //there's a difference
      diffCount++;
      diffIndexes.push(i);
    }
    //check inside the loop to ensure that diffCount does not exceed 2
    if (diffCount > 2) return false;
  }

  if (diffCount !== 2) return false;

  const [index1, index2] = diffIndexes;
  return s[index1] === goal[index2] && s[index2] === goal[index1];
};


//Optimized Version, beats 97% of all:

//Breakdown:

// First, we check if the lengths of s and goal are equal. If they are not equal, 
//we know that it's impossible to make the strings equal by swapping characters, so we return false immediately.

// In Case 1, we handle the scenario when s and goal are identical strings. 
//We create an array charCount of size 26 (corresponding to the English alphabet) to count the occurrences of each character in s.
//We then iterate through each character in s, update its count in charCount, and check if any character occurs more than once. 
//If we find any such character, we know that swapping two occurrences of that character will make the strings equal, 
//so we return true. If there are no duplicate characters, we return false.

// In Case 2, we handle the scenario when s and goal have exactly two differing characters. We use two variables, 
//firstDiffIndex and secondDiffIndex, to store the indices of the differing characters. We iterate through each character in s 
//and goal simultaneously and compare the characters at the same index. If we find two differing characters, 
//we update the firstDiffIndex and secondDiffIndex accordingly.

// After the loop, we check if exactly two differing characters were found (secondDiffIndex !== -1). 
//If this condition is true, we check if swapping the characters at firstDiffIndex and secondDiffIndex in s would make 
//it equal to goal, and vice versa. If both conditions are true, we return true, indicating that the strings can be made equal 
//by swapping the differing characters. Otherwise, we return false.

const buddyStringsO = (s, goal) => {
    // Check if lengths of s and goal are equal
    if (s.length !== goal.length) return false;
  
    // Case 1: When s and goal are identical strings
    if (s === goal) {
      // Initialize an array to count occurrences of characters
      const charCount = new Array(26).fill(0);
  
      // Iterate through each character in s
      for (const char of s) {
        // Get the character's ASCII code and convert it to an index (0-25)
        const charCode = char.charCodeAt(0) - 97;
  
        // Increment the count for the corresponding character
        charCount[charCode]++;
  
        // If we find any character that occurs more than once, we can swap and make the strings equal
        if (charCount[charCode] > 1) return true;
      }
  
      // If there are no duplicate characters, swapping won't make the strings equal
      return false;
    }
  
    // Case 2: When s and goal have exactly two differing characters
    let firstDiffIndex = -1;
    let secondDiffIndex = -1;
  
    // Iterate through each character in s and goal simultaneously
    for (let i = 0; i < s.length; i++) {
      // If characters at the same index are different
      if (s[i] !== goal[i]) {
        // Store the indices of differing characters
        if (firstDiffIndex === -1) firstDiffIndex = i;
        else if (secondDiffIndex === -1) secondDiffIndex = i;
        else return false;
        // More than two differing characters, return false immediately
      }
    }
    console.log(firstDiffIndex);
    console.log(secondDiffIndex);
    console.log(s[firstDiffIndex]);
    console.log(goal[secondDiffIndex]);
    console.log(s[secondDiffIndex]);
    console.log(goal[firstDiffIndex]);
    // At this point, we have exactly two differing characters
    // Check if swapping the differing characters would make the strings equal
    return (
      secondDiffIndex !== -1 &&
      s[firstDiffIndex] === goal[secondDiffIndex] &&
      s[secondDiffIndex] === goal[firstDiffIndex]
    );
  };
  


let s = "aaaaaaabc"
goal = "aaaaaaacb"
console.log(buddyStringsO(s, goal));