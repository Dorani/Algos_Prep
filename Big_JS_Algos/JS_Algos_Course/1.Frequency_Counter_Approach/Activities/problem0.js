// Example 1: Count Occurrences of Numbers
// Write a function that takes an array of numbers and returns an object that counts how often each number appears in the array.
// Input:
// javascript
// Copy code
// arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

const convertToObj = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  }

  return obj; // obj = { 1: 1, 2:2 , 3: 3, 4: 4 };
};

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(convertToObj(arr)); // { 1: 1, 2: 2, 3: 3, 4: 4 }

// Example 2: Character Frequency
// Write a function that takes a string of lowercase characters and returns an object where the keys are the characters and the values are the number of times each character appears.
// Input:
// javascript
// Copy code
// "banana"

// Output:
// javascript
// Copy code
// {
//   b: 1,
//   a: 3,
//   n: 2
// }

const charFrequency = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
};

// Example 3: Length of Words
// Write a function that takes an array of words and returns an object where each word is a key and its value is the length of that word.
// Input:
// javascript
// Copy code
// ["apple", "banana", "kiwi"]

// Output:
// javascript
// Copy code
// {
//   apple: 5,
//   banana: 6,
//   kiwi: 4
// }
const wordLength = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    obj[word] = word.length;
  }
  return obj;
};

// Example 4: Sum of Even and Odd Numbers
// Write a function that takes an array of numbers and returns an object with two properties: even and odd, representing the sum of all even numbers and all odd numbers respectively.
// Input:
// javascript
// Copy code
// [1, 2, 3, 4, 5, 6]

// Output:
// javascript
// Copy code
// {
//   even: 12, // (2 + 4 + 6)
//   odd: 9    // (1 + 3 + 5)
// }
const sumEvenOdd = (arr) => {
  let obj = { even: 0, odd: 0 };

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      obj.even += num;
    } else {
      obj.odd += num;
    }
  }

  return obj;
};
