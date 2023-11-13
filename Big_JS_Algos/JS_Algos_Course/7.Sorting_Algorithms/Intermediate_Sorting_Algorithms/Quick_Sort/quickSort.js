const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (array, idx1, idx2) => {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  };
  let pivot = arr[start];
  //how many items are less than the pivot
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    //compare pivot to current element
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
};

//Call pivot helper with full array
//Then recursively call the quicksort on the right and left side of the pivot point
//Base case occurs when you consider a sub array to have 2 elements
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    //left side:
    quickSort(arr, left, pivotIdx - 1);
    //right side:
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};
