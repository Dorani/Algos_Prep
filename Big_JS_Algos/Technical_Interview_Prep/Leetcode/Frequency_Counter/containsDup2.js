/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

//i and j in the array
//such that nums[i] == nums[j] and abs(i - j) <= k.

//frequency counter:
const containsNearbyDuplicate = (nums, k) => {
  const lookup = {};

  for (let i = 0; i < nums.length; i++) {
    if (lookup[nums[i]] || lookup[nums[i]] === 0) {
      if (i - lookup[nums[i]] <= k) {
        return true;
      }
    }
    lookup[nums[i]] = i;
  }
  return false;
};

const nums = [1, 2, 3, 1, 2, 3],
  k = 2;
console.log(containsNearbyDuplicate(nums, k));
