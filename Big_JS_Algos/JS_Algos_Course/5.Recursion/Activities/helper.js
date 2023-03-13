//Use recursion to collect all the odd values of an array:

//Common Patern When Compiling data

function collectOddValues(arr) {
    //create array to hold our values
    let result = [];

    //Repeats this process by shrinking the array, until its empty
    //Essentially using sub arrays, everytime we slice, and repeat the process
    //Until base case is met.
    function helper(helperInput) {
        //Base Case
        if(helperInput.length === 0) {
            return;
        }
        //If first element is odd
        if(helperInput[0] % 2 !== 0) {
            //Push it into result
            result.push(helperInput[0]);
        }
        //Call it on every element, exluding the one we pushed into result
        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

collectOddValues([1,3,4,7,3,77]);