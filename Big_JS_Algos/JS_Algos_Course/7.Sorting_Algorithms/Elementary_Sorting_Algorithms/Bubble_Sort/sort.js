//Sort from smallest to greatest
//The larger values will bubble to the top
//compare first element to item next to it, if it is, we swap
//then i++, and keep swapping, or not
//we continue till we get to the end, ie our first pass.

//Repeat the process again
//keep swapping, or not, till the end of the pass,
//then we get the last 2 items of the arr which are the highest 2 values

//Repeat over and over till arr is fully sorted and return it.

//Swapping is the most critical:

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

//Start looping with i, at the end of the arr, and towards begining;
//inner loop, j, but from begining, as long as j < i -1, which is technically, the optimal way to determine the max number of comparisons
//as i goes down, so does j, so we essentially running the loop fewer times this way.
//compare arr[j] > arr[j+1]
//swap
//return arr

const bubble = (arr) => {
  let temp;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        a[[j + 1]] = temp;
      }
    }
  }
  return arr;
};
