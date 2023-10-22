// function removeElement(nums, value) {
//     const data = nums.filter(num => num !== value)
//     console.log(data.length, data)
// };


// removeElement(arr, target);



//None filter method style:
//Uising pointers when elements to remove are rare
var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }
    console.log(left)
    return left;
};
const arr = [2,2,2,3,3]
const target = 2;
console.log(removeElement(arr,target))
