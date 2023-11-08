//what if we are almost sorted?
//what is the best way to implement a bubble sort:
//especially if we have a super long arr?

//short circuit arr
//last time through, did we make any swaps?
//if not we are break till the end and return the sorted arr

//Time complexity: O(n^2)
//However, if its almost sorted, the below makes it O(n);
//It simplifies down, but it still not the optimal sorting algorithm to use
//This is just a classical optimzation

const bubble = (arr) => {
  let temp;
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        a[[j + 1]] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
