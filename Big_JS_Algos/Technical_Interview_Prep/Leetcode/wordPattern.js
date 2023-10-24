// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

//Breakdown:
//In summary, this code splits the input string into words, iterates through the pattern and words,
//maintains mappings between pattern characters and words while ensuring uniqueness, and returns true if a valid bijection is found.
// If we've iterated through the entire pattern and splitArr without violations,
// return true, indicating that a bijection exists.

const wordPattern = (pattern, s) => {
  const splitArr = s.split(" ");

  if (pattern.length !== splitArr.length) {
    return false;
  }

  // Initialize an empty object to store pattern to word mappings.
  const patternToWord = {};

  // Initialize a Set to keep track of seen words to ensure uniqueness.
  const seenWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = splitArr[i];

    // Check if the pattern character has already been mapped.
    if (patternToWord[char]) {
      // If it has, compare the existing mapping to the current word.
      if (patternToWord[char] !== word) {
        return false;
      }
    } else {
      // If the pattern character is not in the mapping:
      // Check if the current word has been seen before.
      if (seenWords.has(word)) {
        return false;
      }

      // Otherwise, establish a new mapping between pattern character and word.
      patternToWord[char] = word;
      // Add the word to the set of seen words.
      seenWords.add(word);
    }
  }

  return true;
};
