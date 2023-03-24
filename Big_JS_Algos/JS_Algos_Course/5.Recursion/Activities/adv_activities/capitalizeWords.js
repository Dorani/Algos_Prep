// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words,
// return a new array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

//Breakdown:
//create an empty arr called cappedArr to hold capped elements
//check to see if the length of the array is 1 element long
//return arr[0] and uppercase it
//otherwise, uppercase the first element and push it into our new array
//return the new array merged with the invocation of our function minus the 1st element



function capitalizeWords(arr) {
  let cappedArr = [];
  if (arr.length === 1) return arr[0].toUpperCase();

  cappedArr.push(arr[0].toUpperCase());
  console.log(cappedArr);
  return cappedArr.concat(capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
