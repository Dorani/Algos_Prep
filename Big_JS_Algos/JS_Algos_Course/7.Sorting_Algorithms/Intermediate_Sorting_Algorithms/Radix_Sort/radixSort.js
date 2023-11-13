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

//RADIX SORT:

//defind a function that accepts a list of numbers
//find out which number has the largest number and what is that number and return it
//if the largest number is 4 digits, we have 4 buckets

///loop from 0 up to the number of digits largest
//for each iteration of the loop
//we create buckets for each digit (10 because, nums 0-9)
//place each number in the corresponding bucket based its kth digit

//Replace our existing array with values in our buckets, starting with 0 and going to 9

//return list at the end

const radix = (nums) => {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; l < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
};
