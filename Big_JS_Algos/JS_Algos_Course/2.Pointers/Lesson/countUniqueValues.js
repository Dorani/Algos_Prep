// Implement a function called countUniqueValues which accespts a sorted Array, and counts
// the unique values in the Array. There can be negative numbers in the Array, but it will be sorted.Array

function countUniqueValues(arr) {
  if (arr.length === 0) {
    //0 unique digits
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  //if i != j, return i + 1 since it's 0 indexed and we get the total unique values
  return i + 1;
}

//O(n) time, one loop

const arrayTest = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7];

console.log(countUniqueValues(arrayTest));
