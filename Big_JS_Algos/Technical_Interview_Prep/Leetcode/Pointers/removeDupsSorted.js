const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0; // Edge case for an empty array
  
    let k = 1; // Initialize a variable to keep track of the unique elements count
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[k] = nums[i]; // Move the unique element to the correct position
        k++; // Increment the count of unique elements
      }
    }
  
    return k; // Return the number of unique elements (k)
  };
let arr = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(arr));
