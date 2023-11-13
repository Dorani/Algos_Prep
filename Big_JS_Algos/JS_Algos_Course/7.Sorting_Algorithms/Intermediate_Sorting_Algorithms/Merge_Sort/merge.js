//Combo of two things, merging and sorting.
//Exploits the fact that arrays of 0, or 1 element are always sorted

//Works by decomposing an array into smaller arrays,(devide and conquer), into smaller sub arrays
//and then merge them back together

//Ie 8 element array
//we split it in half - 2, 4 element arrays
//we split again - 4, 2 element arrays
//we wplit again - 8, 1 element arrays

//The we merge in the order they are in, ie, 1st arr and 2nd arr merged
//so on and so forth till we get 4, sorted 2 element arrs

//Repeat the process till we go back up
//since they are typically already sorted in the first iteration for small sets
//compare items arr[0] to arr1[0] which ever is smaller we put into into arr sorted set

//Repeat till last interation where we merge 2, 4 element arrays, we compare to make sure and return the sorted arr

merge([1, 3, 66, 111], [1, 4, 63, 99, 1111]);

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

merge([1, 3, 66, 111], [1, 4, 63, 99, 1111]);
