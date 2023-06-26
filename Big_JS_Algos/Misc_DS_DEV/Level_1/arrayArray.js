//1. You are given an initial 2-value array (x). You will use this to calculate a score.

//If both values in (x) are numbers, the score is the sum of the two.
//If only one is a number, the score is that number. 
//If neither is a number, return 'Void!'.

//Once you have your score, you must return an array of arrays. 
//Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

//1.create a function that holds a parameter x,that is an array of two values
    //pass in x as a parameter
    //x represents an array of 2 values
    //we will need validate these values to understand them
    //and calculate a score


//Inside the function:
    //create a if statement if both elements in the array are numbers
    //create a score let called sum and make it 0
    //take sum = arr[0] + arr[1]  

    //otherwise if one element is != typeOf 'number'