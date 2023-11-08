//Insertion Sort:

//Builds up the sort by gradually creating a larger portion, which is always sorted

//Take an element one at a time, and insert it in the right spot:

//Breakdown:

//Start by picking the second element of the array
//Compare the second element with the one before it and swap if necessary
//continue to the next element and if it is in the incorrect order, iterate
//through the sorted portion, ie the left side, to the place the element in the correct place
//Repeat until arr is sorted

//Complexity still O(n^2)
//still not very good approach
//But if our data was almost sorted, its not bad, essentially like the others.

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    //when we have found the correct spot
    //we swap
    arr[j + 1] = arr[currentVal];
  }
  return arr;
};
