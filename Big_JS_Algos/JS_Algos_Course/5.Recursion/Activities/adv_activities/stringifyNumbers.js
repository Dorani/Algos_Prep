// stringifyNumbers
// Write a function called stringifyNumbers which takes in an 
// object and finds all of the values which are numbers and converts 
// them to strings. Recursion would be a great way to solve this!


/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/


//Breakdown:
//Deconstruct obj into an array of values
    // - use a helper function that takes in input
    //check to see if there is an input first, if not
    //return 0
    // - check to see if there is an input of type 'number'
    //if there is, use json.Stringify to convert it into a string
    //otherwise if the type of input[0] === 'object'
    //then deconstruct it and grab the values intialized as newInput
    //use helper on input
    //then before end of helper function
    //invoke helper on input, and slice out 1 element at a time
//invoke helper on initial deconstructured values
//return object.entries(initial deconstructed array)
