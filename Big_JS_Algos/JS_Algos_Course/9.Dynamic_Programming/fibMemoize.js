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
  return function (...args) {
    //check to see if this has been called with this particalar set of arguments
    if (cashe[args]) {
      return cashe[args];
    }
    //if we get passed this if statement, means we never called our function with that set of arguments
    const result = fn.apply(this, args);
    //take the result from calling the slow fib function and store it in cashe
    cashe[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = momoize(slowFib);
fib();
