function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      //sum together the first 'num' digits
      maxSum += arr[i];
    }
    //set temp sum = to max
    tempSum = maxSum;
    //start loop from num
    for (let i = num; i < arr.length; i++) {
      //make temp sum = to
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

  console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))


//O(n)
//Loop over the entire array 1 time
//Sliding windown create a sum for a lower end to the top end
// then we slide it over (by removing one of the array values, and adding one more in)
  // we don't subtract, we move the ranged window up with the above mechanism.
