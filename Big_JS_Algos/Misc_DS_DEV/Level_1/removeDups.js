function removeDuplicates(nums) {
  nums.splice(0, nums.length, ...new Set(nums));
  return nums;
}

let arr = [1, 1, 2];

console.log(removeDuplicates(arr));

//No JS built in data structure:
// Approach 1: Two Pointers
// Algorithm

// Since the array is already sorted, we can keep two pointers ii and jj, where ii is the slow-runner while jj is the fast-runner. 
// As long as nums[i] = nums[j]nums[i]=nums[j], we increment jj to skip the duplicate.

// When we encounter nums[j] \neq nums[i]nums[j] = nums[i],
//the duplicate run has ended so we must copy its value to nums[i + 1]nums[i+1].
//ii is then incremented and we repeat the same process again until jj reaches the end of array.
var removeDuplicates = function (nums) {
  if (nums.length == 0) return;
  let i = 0;
  let j = 1;

  for (j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
