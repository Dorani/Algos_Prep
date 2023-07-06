// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1. To accommodate this,
// nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// ------ Breaking down this problem into steps----:

//1. I need to combine the two arrays together with the numbers in nums2 array
// replacing the zeroes in nums1 array.

//get total length of merged arr
//remove all elements that are irelevant
//grab the last 3 elements of nums2 and push them into nums1, ie end of arr

//2. After merging, I need to sort the nums1 array.
//Sorted nums1: [ 1, 2, 3, 2, 5, 6 ]

//Sort breakdown: [ 2, 1, 3, 2, 5, 6 ]
//start at second index in loop
//then check to see if first element is a 0
//then check to see if second element (2) < first (1)

//sort:
//temp = 2;
// nums1[j - 1] = 1
// nums1[j] = 2
//[ 1, 2, 3, 2, 5, 6 ]

//--------------Solution----------------------//

const merge = (nums1, m, nums2, n) => {
  const len = m + n;
  nums1.splice(len - n);

  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  for (let j = 1; j < len; j++) {
    if (nums1[j - 1] || nums1[j - 1] === 0) {
      if (nums1[j] < nums1[j - 1]) {
        let temp = nums1[j - 1];
        nums1[j - 1] = nums1[j];
        nums1[j] = temp;
        j = j - 2;
      }
    }
  }
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
