// recursiveRange
// Write a function called recursiveRange which accepts a number and 
// adds up all the numbers from 0 to the number passed to the function 



function recursiveRange(number) {
    if(!number || number === 0) {
        return 0;
    } else {
       //take the number passed in and add it to the invoked function 
       //- 1 in the number parameter, peprform recursively
       return number + recursiveRange(number - 1);
    }
}