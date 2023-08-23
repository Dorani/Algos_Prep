//sliding window approach:

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */

//Array Initialization: 
    //ranges

//Helper Function:
    //This is a helper function named addRange designed to add a missing range to the ranges array.
    // It takes two arguments: start and end, which define the start and end of a missing range. 
    //It then checks:
        //If the start is the same as the end, it pushes a single number range.
        //If the start is less than the end, it pushes the range.

//Check Range Before First Number:
    // This block checks if there's a missing range between the lower bound and the first number 
    // in nums. If the array is empty or the first number is greater than the lower bound, 
    // it adds the missing range using the helper function.

//Check Ranges Between Numbers:
    //This loop iterates over the nums array. For each number, it checks if there's a gap to the next number.
    // If there's a gap, it adds the missing range using the helper function.

//Check Range After the Last Number:
    //After iterating over the array, this block checks if there's a missing range between 
    //the last number in nums and the upper bound. If the array is empty or the last number 
    //is less than the upper bound, it adds the missing range using the helper function.

//Return ranges

const findMissingRanges = (nums, lower, upper) => {
    const ranges = [];

    // Helper function to add ranges
    const addRange = (start, end) => {
        if (start === end) {
            ranges.push([start, start]);
        } else if (start < end) {
            ranges.push([start, end]);
        }
    };

    // Edge case: empty array
    if (nums.length === 0) {
        addRange(lower, upper);
        return ranges;
    }

    // Check range before the first number
    if (nums[0] > lower) {
        addRange(lower, nums[0] - 1);
    }

    // Check ranges between numbers in the array
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            addRange(nums[i] + 1, nums[i + 1] - 1);
        }
    }

    // Check range after the last number
    if (nums[nums.length - 1] < upper) {
        addRange(nums[nums.length - 1] + 1, upper);
    }

    return ranges;
};
  
let arr = [0, 1, 3, 50, 75],lower = 0,upper = 99;

console.log(findMissingRanges(arr,lower,upper));
  