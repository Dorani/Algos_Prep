# Write a function that takes two numbers and returns their sums:

# Part 1: Understand the question

- Can i restate the problem in my own words?
  "Implement addition"

- 2.What are the inputs that go into the problem solving?
  Extent of numbers?
  Bounds?
  How large are the numbers?
  Are we only working with 2 numbers?

- 3.What should the output look like?
  int?
  float?
  string?

- 4.Can outputs be determined from inputs?
  How many inputs are absolutely required?

- 5.How should i label the important pieces of data?
  Name function add
  parameters should be num 1 or num2
  return result

# Part 2: Explore Examples

- User stories!
- Write down some simple examples?
- More complex examples:

* account for spaces? numbers? strings? sentences? case sensitivity?

- Explore empty and invalid inputs?

* empty, or empty string? return what? or they pass in a obj, null etc... what are the edge cases?

# Part 3: Breaking it down:

function charCount(str) {
//make object to return at end

    //loop over string, for each character
        //if the char is a number/letter add it as key in the object, add one to count
        //if the char is NOT a number/letter in obj, add it, and set value to 1
        //otherwise if char is something else (space, . , etc...) do nothing

    //return object at end

}

# Part 4: Solve the Problem:

- go back to part 3 and solve!

```javascript
function charCount(str) {
    //make object to return at end
    const result = {}
    //loop over string, for each character
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        //check if inputs are alpha numeric how can we do this, an array storing every char?, or a regular expression?, or char codes?
        if(/[a-z0-9])/.test(char);
        //if the char is a number/letter add it as key in the object, add one to count
        if(result[char] > 0) {
            result[char]++
        } else {
            //if the char is NOT a number/letter in obj, add it, and set value to 1
            result[char] = 1;
        }
    }
    //return object at end
    return result;
}
```

# Part 5: Look back and Refactor:

- Can you check the result?
- Can you derive the solution differently?
- Can you understand it at a glance?
- Can you reuse the code for another problem?
- Can you improve the performance of your code?
- Can you think of other ways to refactor?
- How have other people solved this problem?

```javascript
function charCount(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9])/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
```

```javascript
function charCount(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9])/.test(char)) {
      //if its truthy, add one to that objs property, otherwise 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
```

- Performance can vary with regex, on diff browsers, etc...
  - How can we address that?
  - charCodeAt() method

```javascript
function charCount(str) {
  let code = str.charCodeAt();
  if (
    !(code > 47 && code < 58) && //(0-9)
    !(code > 64 && code < 91) && //(upper letters)
    !(code > 96 && code < 123)
  ) {
    //(lower letters)
    return false;
  }
  return true;
}
```

- what about when to use lowercasing? before, during or after?
  - depends on inputs
  - do it after the conditions are met, then lower case it, add it, initialize it or add 1
