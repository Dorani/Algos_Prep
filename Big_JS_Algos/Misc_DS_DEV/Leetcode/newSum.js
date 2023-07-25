// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//hash approach

//if there are only 2 elements, then return their indices respectively
//create a hash lookup

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

//Loop through arr nums
// First processed is 9 - 2. Since difference is 7, check if there is an element
// with key 7 in the map. In this case, not yet. But store 2, 0 pair.
// The next pair that will be processed: 9 - 7. Check for existence of 2 in the map.
// In this case it exists so pull out the assigned index to it and create a resulting array.

const twoSum = (nums, target) => {
  const lookup = {};

  if (nums.length === 2) return [0, 1];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (lookup[target - num] !== undefined && lookup[target - num] != i) {
      return [i, lookup[target - num]];
    }
    lookup[num] = i;
  }
  return [];
};

const nums = [3, 2, 4],
      target = 6;
console.log(twoSum(nums));


//Breakdown:
//6-3 =3
//lookup[num] = i; => 3:0
//6-2 =4
//lookup[num] = i; => 2:0
//6-4 = 2
//lookup[num] = i; is there a 2 in the hashtable, yes, so return [i, lookup[target - num]] 
    //[1,2]