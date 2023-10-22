//Frequency Counter:

const canConstruct = (ransomNote, magazine) => {
  if (magazine.length === 0) return false;

  let lookup = {};

  for (let i = 0; i < magazine.length; i++) {
    lookup[magazine[i]]
      ? (lookup[magazine[i]] += 1)
      : (lookup[magazine[i]] = 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!lookup[ransomNote[i]]) {
      return false;
    } else {
      lookup[ransomNote[i]] -= 1;
    }
  }

  return true;
};
