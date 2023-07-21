// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

//create an empty arr called result[]
//loop through the given array from the begining 0
//set a start variable = nums[i]
//while the following condition is met:
//(first condition makes sure for index is less than entire array length AND)
//(second condition determines if there is a consecutive order of indexes represented by values)
    //while (i < entire nums array, &&, nums[i+1] - nums[i] == 1) i++ 
    //check to see if start != nums[i]
    //result.push(`${start} -> ${nums[i]}`)
    //else
    //result.push(start.toString())

//return result;

const summaryRanges = (nums) => {
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        let start = nums[i];

        while(i < nums.length && (nums[i + 1] - nums[i]) == 1) {
            i++;
        }
        if(start != nums[i]) {
            result.push(`${start}->${nums[i]}`)
        } else {
            result.push(start.toString());
        }
    }

    return result;
}