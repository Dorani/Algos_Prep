//Recursive solution

//uses a for loop that returns the nth value from the fib series

//general plan
  //create an array
  //assemble all number up to 8



function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

//Time complexity - Exponential time solution (BADDDDDDD)
// 15 calls to the fib function with fib(5)
// 25 total for fib(6)

//for each increment of our value n, we are experiencing and
//drastic increase in the number of function calls, ie, operations
//to calculate our value

//Next thing they may ask
//Is there anyway we can improve this recursion solution to make
//it non Exponential and improve the runtime?

// fib is being called with identical arguments, keep that in mind
// these are dup calls with identical arguments
// so how can we avoid the dups?

//They want to hear Memoisation:
// Store the arguments of each function call along the result.
// If the function is called again with the same arguments, reuturn
// the precomputed result, rather than running the function again.

//we are going to create a function call memoizer
  // we call it with a slow function
  // returns a fast function
// this is reusable!

function memoize(fn) {
  const cashe = {};
  //super charged function
  //take all the arguments and assign them as an array to something called args
  return function(...args){
    //check to see if this has been called with this particalar set of arguments
    if (cashe[args]){
      return cashe[args];
    }
    //if we get passed this if statement, means we never called our function with that set of arguments
    const result = fn.apply(this, args);
    //take the result from calling the slow fib function and store it in cashe
    cashe[args] = result;

    return result;
  }
}


function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = momoize(slowFib)
fib();
