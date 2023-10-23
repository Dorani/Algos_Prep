// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//fist check to see if the array has any elements
//create a lookup object that will hold each indivisual element from nums as a key
//and its respective value should be = 1, unless that key already exists, then its +1

//then we loop through the object and check to see if any keys value is > 1
//if it is return true
//otherwise false

const containsDuplicate = (nums) => {
  if (!nums.length) return false;

  const lookup = {};

  for (let i = 0; i < nums.length; i++) {
    lookup[nums[i]] ? (lookup[nums[i]] += 1) : (lookup[nums[i]] = 1);
  }

  for (let key in lookup) {
    if (lookup[key] > 1) return true;
  }

  return false;
};

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
