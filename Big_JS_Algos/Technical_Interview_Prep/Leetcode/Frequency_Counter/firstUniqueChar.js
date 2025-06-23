const firstUniqChar = (s) => {
  const lookup = {};

  // Count the frequency of each character in the string
  for (let i = 0; i < s.length; i++) {
    lookup[s[i]] ? (lookup[s[i]] += 1) : (lookup[s[i]] = 1);
  }
  console.log(lookup);

  // Iterate through the string and find the first character with a frequency of 1
  for (let i = 0; i < s.length; i++) {
    if (lookup[s[i]] === 1) return i;
  }

  return -1;
};

const s = "aabb";
console.log(firstUniqChar(s));

const firstUniqueChar = (s) => {
  const lookup = {};

  for (let i = 0; i < s.length; i++) {
    if (lookup[s[i]]) {
      lookup[s[i]] += 1;
    } else {
      lookup[s[i]] = 1;
    }
  }

  //now i need to loop through s AGAIN
  for (let i = 0; i < s.length; i++) {
    if (lookup[s[i]] === 1) return i;
  }
  return -1;
};

//create pseudo code for the above function
//create a lookup object
//loop through the string and count the frequency of each character
//loop through the string again and return the index of the first character with a frequency of 1
//if no characters have a frequency of 1, return -1
