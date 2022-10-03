//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase or name fdormed by rearranging the letter of another, such as cinema, formed from iceman



// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//       }

//     const frequencyCounter1 = {};
//     const frequencyCounter2 = {};

//     for (let char of str1) {
//         frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//     }

//     for (let char of str2) {
//         frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);

//     //Loop over the first one, and go through each key and see if
//     for(let key in frequencyCounter1){
//         //is the key char is NOT apparent in the second frequency counter
//         if(!(key in frequencyCounter2)){
//             return false
//         }
//         //if it is, then check if the chars corresponds as well
//         if(frequencyCounter2[key] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     //then return true when we run through it all!
//     return true

// }

// //console.log(isAnagram('anagrams', 'nagaram'));
// console.log(isAnagram('seif', 'feis'));


//Another way with that is less memory intensive and a bit more elogant 
function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
    console.log('----------------')
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
      console.log(lookup);
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  console.log(validAnagram('anagrams', 'nagaramm'))