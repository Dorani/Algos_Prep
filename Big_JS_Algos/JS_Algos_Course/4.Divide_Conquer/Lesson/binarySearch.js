function search(arr, value) {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < value) {
      min = middle + 1;
    } else if (arr[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(search(arr, 9)); // Output: 8 (index of value 9 in the array)

//pick a middle point, cause it's sorted
//ie half of the arr lengths
//is the value we are looking for > than the current index
//move accordingly.

// Time Complexity is Log(N) => binary search, commonly used pattern for larger data sets.

function search1(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let middle = Math.floor((low + high) / 2);
    if (arr[middle] === value) {
      return middle; // Found the value
    } else if (arr[middle] < value) {
      low = middle + 1; // Search in the right half
    } else {
      high = middle - 1; // Search in the left half
    }
  }
}
