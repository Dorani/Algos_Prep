const majorityElement1 = (nums) => {
  if (nums.length === 1) return nums[0];

  const hashFrequency = {};
  const n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (hashFrequency[nums[i]]) {
      hashFrequency[nums[i]] += 1;
    } else {
      hashFrequency[nums[i]] = 1;
    }

    if (hashFrequency[nums[i]] >= n / 2) {
      return nums[i];
    }
  }
};

const nums1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement1(nums));

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

//Boyer-Moore Voting Algorithm O(n) time, O(1) space

// Initialize sol to store the candidate majority element and cnt to keep track of its frequency.
// Iterate through the nums array, one element at a time.
// If cnt is equal to 0, it means we haven't found a candidate majority element yet, so we update sol to the current element, and cnt becomes 1.
// If the current element is equal to the candidate sol, we increment cnt because we've found another occurrence of the same element.
// If the current element is not equal to the candidate sol, we decrement cnt because we've found a different element.
// By the end of the loop, sol will contain the majority element.
// This algorithm works because if there is a majority element in the array, it will survive the "cancellation" process, as each occurrence of a different element cancels out one occurrence of the majority element. The majority element will be the final candidate left.

const majorityElementBoyer = (nums) => {
  let sol = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (cnt == 0) {
      sol = nums[i];
      cnt = 1;
    } else if (sol == nums[i]) {
      cnt++;

      if (cnt > nums.length / 2) {
        return sol; // Found the majority element
      }
    } else {
      cnt--;
    }
  }

  return sol;
};
