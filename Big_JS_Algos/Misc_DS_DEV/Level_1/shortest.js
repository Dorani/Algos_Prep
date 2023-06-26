// Given an array of integers, calculate the Average of these numbers.

// Main challenge is to write shortest and compact function for it.

// For example: var a = [0, 1, 2];
// avg(a) // output should be 1
// Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.

//create a function called avg
//function accepts a parameter (arr) that is an array of integers

const avg = (arr) => {
  //create a let sumOfAll = 0
  let sumOfAll = 0;
  let calculatedAverage = 0;
  //for loop that iterates through parameter arr
  for (let i = 0; i < arr.length; i++) {
    //sumOfAll += arr[i]
    sumOfAll += arr[i];
    //const calculatedAverage = sumOfAll / arr.length
    calculatedAverage = sumOfAll / arr.length;
  }

  //return avg
  return calculatedAverage;
};

let a = [0, 1, 2];
avg(a);