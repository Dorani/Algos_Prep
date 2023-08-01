//what if we use divide and conquer approach
//binary search:

//establish 2 variables min and max
    //set min to 0
    //max to arr.length -1;
    //missingNumberIndex = 0;

//while(min < max) 
    //establish the mid = Math.floor(min + max) /2;
    //if(arr[mid] < target)
        //min = mid +1;
    //else if(arr[mid] > target) 
        //max = mid -1
    //else if(arr[mid]-target === 1)
        //mid === arr[mid-1] 
    //else
        //return mid;

//return min;



const searchInsert = (nums, target) => {
    if(!nums && target === 0) return -1;

    let min = 0;
    let max = nums.length -1;
   

    while(min <= max) {
        let mid = Math.floor((min + max) /2);
        if(nums[mid] < target) {
            min = mid+1;
        } else if(nums[mid] > target) {
            max = mid -1;
        } else {
            return mid;
        }
    }

    return min;
}