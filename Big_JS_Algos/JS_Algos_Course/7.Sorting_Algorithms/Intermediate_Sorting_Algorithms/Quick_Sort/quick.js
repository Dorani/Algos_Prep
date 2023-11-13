//Like Merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
//Works by selecting one element (called the pivot) and finding the index where the pivot
//should end up in a sorted array

//Once the pivot is positioned approrpriately, quick sort can be applied on either side of the pivot

//ie:
// [5, 2, 1, 8, 4, 7, 6, 3]

//pick element "5"
//move all number less than 5 to the left
//move all the number greater than 5 to the righ

//[3,2,1,4,5,7,6,8]

//then recursively repeat the process on left side and right

//take 3
// move it to index 2
//[1,2,3,4,5]

//now left side is sorted

//So right side:
//[...,7,6,8]
//Pivot point is 7
// put 7 in the right index
//it sorts
//[1,2,3,4,5,6,7,8]

//Choosing a pivot element, we will choose the first element:

//create a pivot helper function
//it will help accept 3 args, arr, start index, and end index
//grab the pivot from start of arr
//store the current pivot index in a var(to keep track of where it should end up)

//loop through the array, from start to end
//if pivot is > than current element
//increment pivot index variabl
//swap the current element with the element at the pivot index
//swap starting element with the pivot index.

//return the pivot index

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  let pivot = arr[start];
  //how many items are less than the pivot
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    //compare pivot to current element
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
};
