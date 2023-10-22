// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

//Approach:

//If there aren't any chars return false
//create a stack to store all the open parenthesis 
//set a hash for the valid characters

//Loop through the string
//Check if the character is an open parenthesis by making sure it is not a key in our hashmap.
//If its not, push that str[i]

//Else If it is a closed parenthesis we can take the open one off of our stack and see if it is of the same type.
//If it isn’t we return false


//if the stack has nothing left, we know that each char from the string met its respective match
const isValid = (str) => {
  if (!str.length) return false;

  const stack = [];
  const valids = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for(let i = 0; i < str.length; i++) {
    if(!valids[str[i]]) {
        stack.push(str[i]);
    } else if(stack.pop() !== valids[str[i]]) {
        return false;
    }
  }

  return stack.length === 0;

};
