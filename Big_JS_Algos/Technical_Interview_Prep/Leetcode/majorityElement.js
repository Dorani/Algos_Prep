// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

//Good O(n) both time and space
const majorityElement = (nums) => {
  if (nums.length === 1) return nums[0];

  const hashFrequency = {};

  const n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    hashFrequency[nums[i]]
      ? (hashFrequency[nums[i]] += 1)
      : (hashFrequency[nums[i]] = 1);

    if (hashFrequency[nums[i]] >= n / 2) {
      return nums[i];
    }
  }
};
