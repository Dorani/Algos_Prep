const findDisappearedNumbers = nums => {
    const n = nums.length;
    
    // Mark numbers as negative to indicate presence
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (nums[num - 1] > 0) {
            nums[num - 1] = -nums[num - 1];
        }
    }

    const output = [];

    // Find numbers that are still positive
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            output.push(i + 1);
        }
    }

    return output;
};

const nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums)); // Output: [5, 6]


