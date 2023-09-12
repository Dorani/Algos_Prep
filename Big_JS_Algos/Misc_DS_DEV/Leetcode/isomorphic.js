// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Loop to scan both strings while keeping track of character mappings will suffice. 
//You can use two dictionaries (or hash maps) to keep track of the mappings 
// from characters in s to characters in t and vice versa. 

// As you iterate through the strings, you can populate these mappings and check for any inconsistencies.

const isIsomorphic = (s,t) => {

    const sToMap = {};
    const tToMap = {};
    
    if(s.length != t.length) return false;


    for(let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if(sToMap.hasOwnProperty(sChar)) {
            if(sToMap[sChar] !== tChar) {
                return false;
            }
        } else {
            sToMap[sChar] = tChar;
        }

        if(tToMap.hasOwnProperty(tChar)) {
            if(tToMap[tChar] !== sChar) {
                return false;
            }
        } else {
            tToMap[tChar] = sChar;
        }
    }

    return true;

}

let s = "paper", t = "title"
console.log(isIsomorphic(s, t))