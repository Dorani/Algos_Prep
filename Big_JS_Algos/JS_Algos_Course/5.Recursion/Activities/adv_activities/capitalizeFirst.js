// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//breakdown:
// In our nested loop, we only need to iterate once because we only care about 
// capitalizing the first letter of each string. During each iteration, 
// we’re isolating the first letter by calling charAt(0) on element, 
// which again represents each of our strings. 
// The charAt(0) grabs the first index of our string, 
// so the “n”, “l”, and “h” of our input array ([“nami”, “looks”, “hungry”]), 
// and then we call the method toUpperCase() to simply capitalize each of the three 
// letters. Finally, after each letter is capitalized in their respective iteration, 
// we call slice(1) on our element, which returns the rest of our string after 
// our capitalized letters (so in our example, “ami”, “ooks”, “ungry”), 
// and add it to their capitalized letter.

// We finally have our desired output, [“Nami”, “Looks”, “Hungry”]. 
// Which reminds me, I should probably feed Nami her dinner.

function capitalizeFirst(arr) {
  let newArray = [];

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      for (let j = 0; j < 1; j++) {
        let capitalizeStr = element.charAt(0).toUpperCase() + element.slice(1);
        newArray.push(capitalizeStr);
      }
    }
  }

  helper(arr);
  return newArray;
}

capitalizeFirst(["car", "taco", "banana"]);
