// Write a function called maxSubarraySum which accepts an array of integers
// and a number called navigator. The function should calculate the max sum of n consecutive
// elements in the array.



function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  
  










maxSubarraySum([1,2,5,2,8,1,5], 2) //10
//element 2, and 8 consecutively  are the 2 back to back elements that
//add up to the greatest value in the array





