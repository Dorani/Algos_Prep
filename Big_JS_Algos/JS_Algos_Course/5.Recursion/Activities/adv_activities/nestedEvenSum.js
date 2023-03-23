// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

//Breakdown:
// - deconstruct obj into an array of just values
// - establish sum var and intialize it to 0
  // - use helper function that takes in an input
  //   - see if there is an input first and if there isnt
  //     - return 0
  //   - see if there is an input of type 'number' and that input % 2 === 0
  //    - sum += and that input[i]
  //   - otherwise if type of input[0] is an obj then
  //     - deconstruct it and grab the values initialize it as newInput
  //     - use helper(input)
  //   - then before the end of helper function
  //     - invoke helper and slice out 1 element at a time until we reach 0
// - invoke helper on the initial deconstruted values which will allow for the process to begin
// - return the sum

function nestedEvenSum(obj) {
  let sum = 0;
  let val = Object.values(obj);

  const helper = (input) => {
    if (!input.length) return 0;
    if (typeof input[0] === "number" && input[0] % 2 === 0) {
      sum += input[0];
    } else if (typeof input[0] === "object") {
      const newInput = Object.values(input[0]);
      helper(newInput);
    }
    helper(input.slice(1));
  };
  helper(val);
  return "The sum is of all evenly divisible numbers is: " + sum;
}
