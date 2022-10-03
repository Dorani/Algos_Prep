// //Write a function called same, which accepts two arrays.
// //The function should return true if every value in the array has it's corresponding value squared
// //in the second Array. The frequency of values must be the same. 

// //2 loops, index of itterates so this is sub optimal
// //O(n2), nested, quadratic
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

// same([1,2,3,2], [9,1,4,4])





//Refactored Approach:
//O(n) time, linear
//3 loops, but different and seperate, ie(3n)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    //Start with empty objs for storing frequency of occurances
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //For each val in arr 1
    for(let val of arr1){
        //add 1 to frequency counter if its there, or initialize it to 1 of 1st array
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        //add 1 to frequency counter if its there, or initialize it to 1 of 2nd array
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    //Check out both frequency objs
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    //Loop over the first one, and go through each key and see if
    for(let key in frequencyCounter1){
        //is the key squared is NOT apparent in the second frequency counter
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        //if it is, then check if the values corresponds as well
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    //then return true when we run through it all!
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]));