// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"



const findTheDifference = (s,t) => {
    if(t.length !== s.length + 1) return "";
    const lookup = {};
    let totalString = s+t;

    for(let i = 0; i < totalString.length; i++) {
        let char = totalString[i];
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }

    for(const [key,value] of Object.entries(lookup)) {
        if(value % 2 !== 0) {
            return key;
        }
    }

    return "";

}

let s = "abcd", t = "abcde";

console.log(findTheDifference(s,t));