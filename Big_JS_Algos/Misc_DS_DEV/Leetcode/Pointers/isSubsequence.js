//2 pointers:

// In this implementation, I used two pointers, sIndex and tIndex, to iterate over s and t respectively. 
// Whenever a character matches between s and t, I move sIndex one position to the right. 
// If sIndex reaches the end of s, that means s is a subsequence of t.




const isSubsequence = (s,t) => {
    if(s.length === 0) return true;
    if(t.length === 0) return false;

    let indexS = 0;
    let indexT = 0;

    while(indexT < t.length) {
        if(s[indexS] === t[indexT]) {
            indexS++;
        }
        if(indexS === s.length) {
            return true;
        }
        indexT++;
    }

    return false;
 }

let s = "ab", t = "baab";


console.log(isSubsequence(s,t))