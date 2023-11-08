//Selection Sort:
//Similar to bubble sort, but instead of placing large values into sorted position, it
//place small values into sorted positions.

//Start with first 2 elements, check min
//then the min to i++
// once we have identified the absolute min, we swap it with the 1st element we started
//with in the initial comparison

//Loop through arr from 0
//store the first element as the smallest values youve seen so far
//compare this item to the next item in the arr with another loop
//j where we start at i+1, and increment by 1 to check if the second element is less than 1st
//if i !== lowest
//swap

//repeat till end of arr.lengths 1st iteration

//return arr;

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
};
