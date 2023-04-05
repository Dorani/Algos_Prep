// CollectStrings
// Write a function called collectStrings which accepts an object
// and returns an array of all the values in the object that have
// a typeof string

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])

//-------Breakdown Helper Function Approach-------------//
//Create an empty array to hold the string elements
//Create helper function to iterate through the object
// - Check to see if the value of the property is a string
// - if it is push it into emptyArr
// - if object property value is of type of 'object' and !Array.isArray(obj[key])
// - return helper with o[key]
//outside the helper, invoke it, with our obj paramater
//finally return the new array holding the string elements

//Helper Function Recursive Style
function collectStrings(obj) {
  const stringArr = [];

  //helper function to gather strings
  const gatherStr = (o) => {
    for (let key in o) {
      if (typeof o[key] === "string") {
        stringArr.push(o[key]);
      } else if (typeof o[key] === "object" && !Array.isArray(o[key])) {
        return gatherStr(o[key]);
      }
    }
  };
  gatherStr(obj);
  return stringArr;
}

//-------Breakdown Pure Recursive Approach-------------//
//Create an empty array to hold the string, arrStr[]
//Immediately loop through the object
//Check to see if the obj[key]s value type of is a 'string'
//If it is, push that obj[key] into the arrStr[]'
//Check if type of obj[key] is an obj and not an Array
//return arrStr.concat with the function invoked and pass in the obj[key]
//return arrayStr;

function collectStrings(obj) {
  const arrStr = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arrStr.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      return arrStr.concat(collectStrings(obj[key]));
    }
  }
  return arrStr;
}
