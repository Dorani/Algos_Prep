var plusOne = function (digits) {
  const fromArray = digits.join(""); // get Digits out of Array
  const toInt = BigInt(fromArray); //Dont use parseInt, use BigInt instead :)
  const addOne = toInt + 1n; // add one!
  const result = Array.from(String(addOne), Number); // return digits to array
  return result;
};

console.log(plusOne([1, 2, 3]));



//Schoolback addition => Optimized approach

                  // Algorithm:

// Move along the input array starting from the end of array.

// Set all the nines at the end of array to zero.

// If we meet a not-nine digit, we would increase it by one. The job is done - return digits.

// We're here because all the digits were equal to nine. Now they have all been set to zero. 
//We then append the digit 1 in front of the other digits and return the result.
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i]++;
          break;
      } else if (i === 0) {
          digits[0] = 0
          digits = [1].concat(digits)
          break;
      } else {
          digits[i] = 0;
      }
  }
  return digits;
};

