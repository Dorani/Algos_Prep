// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

 

// Example 1:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

// Example 2:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1
 

// Constraints:

// 2 <= wordsDict.length <= 3 * 104
// 1 <= wordsDict[i].length <= 10
// wordsDict[i] consists of lowercase English letters.
// word1 and word2 are in wordsDict.
// word1 != word2



//Breakdown:


//declare 2 arr index vars
//create 1 distance var and set it to Inf

//loop through wordDict
    //do checks for instances 1, 2
    //then check if those indexes have data
    //if they do, tally the distance, by grabbing the smaller number of steps
//return min distance


const wordsDict = ["practice", "makes", "perfect", "coding", "makes"]; 
let word1 = "makes";
let word2 = "coding";


const shortestDistance = (wordsDict, word1, word2) => {
    let index1;
    let index2; 
    let minDistance = Infinity;

    for(let i = 0; i < wordsDict.length; i++) {
        if(wordsDict[i] === word1) index1 = i;
        if(wordsDict[i] === word2) index2 = i;
        console.log(index1);
        console.log(index2);
        if(index1 !== undefined && index2 !== undefined) {
            minDistance = Math.min(minDistance, Math.abs(index1-index2));
        }
    }

    return minDistance;
}

console.log(shortestDistance(wordsDict, word1, word2))