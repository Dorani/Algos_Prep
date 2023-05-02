// stringifyNumbers
// Write a function called stringifyNumbers which takes in an
// object and finds all of the values which are numbers and converts
// them to strings. Recursion would be a great way to solve this!

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        elements: [1,2,4],
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true, 
            random: "66"
        }
    }
}
*/

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

//Conditional Recursive Call Approach:

//stringifyNumbers(obj):
//Create an empty newObj = {}
//Loop through each key of the obj function parameter
// - if the type of the obj[key] === 'number'
//  * newObj[key]: obj[key].toString();
// - else if type of obj[key] === 'object' && !Array.isArray(obj[key]) => 2 Truthy statements
//  * newObj[key]: stringifyNumbers(obj[key])
// - else
//  * newObj[key] = obj[key]
//return newObj

function stringifyNumbers(obj) {
  const newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

stringifyNumbers(obj);
