//Break up the array into halves until you have arrays that are empty or have 1 element

//once you have smaller sorted arrays, merge those arrays with other sorted arrays, until you are back at full
//length

//Once the array has been merged back together, return the merged and sorted array.

//helper merge function
const merge = (arr1, arr2) => {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

//Time complexity O(n log n)
//Space O(n)
const mergeSort = (arr) => {
  //base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  //split arr into 2 pieces until 1 element left
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  //merge both those single elements, then we call merge
  return merge(left, right);
};
