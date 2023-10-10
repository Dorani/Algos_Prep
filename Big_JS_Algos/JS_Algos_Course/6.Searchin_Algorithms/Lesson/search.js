// Given a sorted array of intergers, write a function called search,
// that accepts a value and return the index where the value passed to the function is located.
// If the value is not found, return -1;


//Brute force linear, slow approach accross massive data sets.

function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i
        }
    }
    return -1;
}

search([1,2,3,4,5,6], 4) // will return 3