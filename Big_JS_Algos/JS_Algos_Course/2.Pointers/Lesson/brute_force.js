//Write a function called sumZero which accepts a sorted array of integers. The function should find the first
// pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if pair does Notification

// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// sumZero([-4,-3,-2,-1,0,1,2,5])

//O(n2) brute force approach both time and space

// Multiple pointer pattern
// Using 2 pointers to identify to lower end and top end of the data structure,
// we then check to see if they meet a certain condition, if they do not we move them along accordingly
// one pointer will either move down, or one will move up, depending on the conditions met, until the respective
// pointer values equals 0.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
//time and space complexity is 0(n)
