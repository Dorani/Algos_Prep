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
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])


//Breakdown:
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
        for(let key in o) {
            if(typeof o[key] === 'string') {
                stringArr.push(o[key]);
            } else if(typeof o[key] === 'object' && !Array.isArray(o[key])) {
                return gatherStr(o[key]);
            }
        }
    }
    gatherStr(obj);
    return stringArr;
}