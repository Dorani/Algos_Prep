//find the encoded weight of each element and sort accordingly into buckets recursively

//get a specific digit
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

//how many digits are in a number
//if the largest number has say.. 4 digits
//so we need to isolate the number with the largest number of digits
//base a base 10 number and figure out how many digits there are

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

//Now we need a function to return the number of digits in the largest numbers of an array of number
const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
