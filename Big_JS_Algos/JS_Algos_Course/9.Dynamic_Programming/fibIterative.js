//Iterative solution

//uses a for loop that returns the nth value from the fib series

//general plan
//create an array
//assemble all number up to 8

function fib(n) {
  const result = [0, 1];

  //we start at i=2 and iterate all the way to n
  for (let i = 2; i <= n; i++) {
    //pull out the previous 2 records
    const a = result[i - 1];
    const b = result[i - 2];
    //add together
    result.push(a + b);
  }
  return result[result.length - 1];
}

//runtime complexity?

// for every increase in n, we have to calculate 1 additional number
// so i would say this is lenear
