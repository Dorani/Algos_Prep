// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 


const longestCommonPrefix = (strs) => {
    if (!strs || strs.length === 0) return "";
 
    let prefix = "";

    //calc min length amongst all elements
    const minLength = Math.min(...strs.map(str => str.length));
    
    for(let i = 0; i < minLength; i++) {
        const char = strs[0][i];
        if(strs.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}

const strs = ["flower","flow","flight"];

longestCommonPrefix(strs);