// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

//This loop iterates through half of the length of s. The reason we only go up to 
//half the length is that a repeated substring can't be longer than half of s (otherwise it wouldn't be repeated).

// This line checks if repeating tempStr enough times to match the length of s results in the string s itself:
// s.length / tempStr.length computes how many times we need to repeat tempStr to match the length of s.
// tempStr.repeat(s.length / tempStr.length) actually repeats the tempStr that many times.
// The comparison checks if the repeated string matches s.

//Third loop iteration (i = 2):
// tempStr = "abc"
// Repeating "abc" 4 times gives us "abcabcabcabc", which matches our string s.
// The function returns true.


const repeatedSubstringPattern = s => {
    let tempStr = "";

    for(let i = 0; i < Math.floor(s.length / 2); i++) {
        tempStr += s[i];
        if(tempStr.repeat(s.length / tempStr.length) === s) return true;
    }

    return false;
}

let s = "abcabcabcabc"
console.log(repeatedSubstringPattern(s));




//Better Approach:
// A simpler, but still efficient approach involves a string manipulation trick:

// Take the original string s and concatenate it to itself.
// Remove the first and last characters from the resulting string.
// Check if the original string s exists within this new string.
// If s exists in this modified concatenated string, then it is made up of repeated substrings.


// Explanation:
// By doubling the string (s + s), we are ensuring that if there's a repeated pattern, 
//it will appear in the doubled string without the first and last characters.

// For instance, consider s = "abcabc". The doubled string is "abcabcabcabc". 
//Without the first and last characters, it becomes "bcabcabcab". Notice that the original s ("abcabc") exists in this string.

// The function .includes() checks the existence of a substring within a string in O(n) time.

const repeatedSubstringPatternV = s => {
    let doubleS = s + s;
    return doubleS.slice(1, doubleS.length - 1).includes(s);
};