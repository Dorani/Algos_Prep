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
