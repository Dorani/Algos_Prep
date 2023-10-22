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



//Refactored version:
// We create a variable firstStr and assign it the value of the first element in the strs array. 
// This is because we'll use the characters of the first string as our reference for finding the common prefix.

// We initialize a variable prefix as an empty string. This variable will store the longest common prefix we find.

// We set up a for loop to iterate through the characters of the firstStr 
    //we create a variable char and assign it the current character at index i of firstStr. 
    //This character will be our reference character for comparison.
    //We use the every method to check if the character char at index i is present in the same position in 
    //all the strings in the strs array. The every method returns true if the provided callback function returns 
    //true for all elements in the array; otherwise, it returns false.

    // We use the every method to check if the character char at index i is present in the same position in 
    // all the strings in the strs array. The every method returns true if the provided callback 
    // function returns true for all elements in the array; otherwise, it returns false.

//After the loop, we return the prefix, which contains the longest common prefix found among all the strings in the strs array.
const longestCommonPrefixV1 = (strs) => {
    if(!strs || strs.length === 0) return "";

    const firstWord = strs[0];
    let prefix = "";

    for(let i = 0; i < firstWord.length; i++) {
        const char = firstWord[i];
        if(strs.every(str => str[i] === char)){
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}