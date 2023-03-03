// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(1)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(number1, number2) {
  const num1 = number1.toString();
  const num2 = number2.toString();

  if (num1.length !== num2.length) return false;

  const lookup = {};

  for (let i = 0; i < num1.length; i++) {
    let number = num1[i];
    lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
  }

  for (let i = 0; i < num2.length; i++) {
    let number = num2[i];
    if (!lookup[number]) {
      return false;
    } else {
      lookup[number] -= 1;
    }
  }
  return true;
}
