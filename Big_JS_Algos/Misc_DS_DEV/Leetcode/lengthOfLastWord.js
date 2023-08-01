// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

const lengthOfLastWord = (s) => {
  if (!s) return 0;
  let newStr = s.split(" ");
  let lastWord = " ";
  const filteredArray = newStr.filter((element) => element !== "");

  for (let i = 0; i < filteredArray.length; i++) {
    lastWord = filteredArray[filteredArray.length - 1];
  }
  if (lastWord) {
    return lastWord.length;
  }

  return 0;
};
