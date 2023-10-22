// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


// Let's use one pointer (i) to iterate through the array and another 
//(lastNonZeroFoundAt) to keep track of the position where the non-zero element should be placed.
// As we iterate with i, if the current element is not zero, we swap it with the element 
// at lastNonZeroFoundAt, then increment the lastNonZeroFoundAt pointer.

const moveZeroes = input => {
    let lastNonZeroFoundAt = 0;

    for(let i = 0; i < input.length; i++) {
        if(input[i] !== 0) {
            [input[lastNonZeroFoundAt], input[i]] = [input[i] , input[lastNonZeroFoundAt]]
            lastNonZeroFoundAt++;
        }
    }
    return input;
}


// For the input [0,1,0,3,12], it works as follows:

// Initially: [0,1,0,3,12], lastNonZeroFoundAt = 0, i = 0
// i = 1 (since nums[0] is 0): Swap nums[1] and nums[0], resulting in [1,0,0,3,12], increment lastNonZeroFoundAt.
// i = 2: No swap since nums[2] is 0.
// i = 3: Swap nums[3] and nums[1], resulting in [1,3,0,0,12], increment lastNonZeroFoundAt.
// i = 4: Swap nums[4] and nums[2], resulting in [1,3,12,0,0], increment lastNonZeroFoundAt.
// Final output: [1,3,12,0,0] which is the desired result.




