// - An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

//Breakdown:

//Hashtable, frequency counter

//create an object called lookup
//loop through s
// if lookup[s[i]] exists, increment value by 1, otherwise set it to 1

//loop through t
//check to see if !lookup[t[j]]
// return false

//return true;

const isAnagram = (s, t) => {
  const lookup = {};

  if (s.length != t.length) return false;

  for (let i = 0; i < s.length; i++) {
    lookup[s[i]] ? lookup[s[i]] += 1 : lookup[s[i]] = 1;
  }
  console.log(lookup);

  for (let j = 0; j < t.length; j++) {
    if (!lookup[t[j]]) {
      return false;
    } else {
      lookup[t[j]] -= 1;
    }
  }

  return true;
};

let s = "anagram",
  t = "nagaram";

console.log(isAnagram(s, t));
