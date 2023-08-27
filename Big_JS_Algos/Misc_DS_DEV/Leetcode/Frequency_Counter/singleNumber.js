/**
 * @param {number[]} nums
 * @return {number}
 */

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// How it works with the problem:
// For the given problem, each number in the array either appears twice or once.
// Using the XOR operation for each number in the array:

// Numbers that appear twice will cancel each other out (because a^=a=0).
// The number that appears once will remain because of the property a^=0=a.
// So, after XORing all numbers in the array, the only value left in result will be the number that appears once.


// Properties of XOR:

// a⊕a=0: Any number XORed with itself will result in 0.

// a⊕0=a: Any number XORed with 0 will be the number itself.

// a⊕b⊕a=b: The order in which XOR operations are applied does not matter, 
// and any number XORed with itself cancels out, leaving the other number.

// XOR the first number: 
// result=0⊕2=2
// XOR the second number: 
// result=2⊕2=0 (since 2 XOR 2 is 0)
// XOR the third number: 
// result=0⊕1=1



const singleNumber = (nums) => {
    let result = 0;
    for(let num of nums) {
        result ^= num;
    }
    return result;
};


const nums = [4,1,2,1,2]

console.log(singleNumber(nums))