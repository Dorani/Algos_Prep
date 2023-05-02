// Create a queue data struture. the queue should be a class with
// mentods 'add' and 'remove'.
// Adding to the quue should store an element until it is removed


class Queue {
  //when we create a new queue from scratch, we want to initialize an array
  //and assign it to instance to the queue that was created
  //the only place in a class where you can run some intiailization code, is in the constructor
  //it will automatically be called
  constructor(){
    //we need to hold these records in order, so we will need to use an array from js
    this.data = [];
  }

  add(item) {
    this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }
}

//Array data structure does most of the heavy lifting.
// Interviewer may specifically ask you to use a Queue to do xyz


const groceryLine = new Queue();
console.log(groceryLine)

groceryLine.add("person1");
groceryLine.add("person2");
groceryLine.add("person3");
groceryLine.add("person4");
groceryLine.add("person5");

console.log(groceryLine);
