//Directions

//1.Implement a 'peek' method in this Queue class.
//Peek should return the last element ( the next one to be returned)
//From the Queue WITHOUT removing it.

class Queue {
  //when we create a new queue from scratch, we want to initialize an array
  //and assign it to instance to the queue that was created
  //the only place in a class where you can run some intiailization code, is in the constructor
  //it will automatically be called
  constructor(){
    //we need to hold these records in order, so we will need to use an array from js
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove(record) {
    return this.data.pop()
  }

  peek() {
    //1st we need to get access to the last element inside our data Array
    this.data[this.data.length - 1]
  }
}

function weave (sourceOne, sourceTwo) {
  //create a new queue that can store the combined result of source one and source 2
  const q = new Queue();

  //we need to make sure that we somehow interate through all the different elements,
  //without accessing the array inside them
  //as long as either one of these returns a method, we care good to go
  while (sourceOne.peek() || sourceTwo.peek()) {
    //during this iteration
    //check that peek function again on both of these queues to make sure
    //they both have elements inside them before you put them in the 3rd queue
    if (sourceOne.peek()){
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
}














//2.Implement a 'weave' function. Weave receives twos queues as arguments
// and comebines the contents of each into a new, third queue.
// The 3rd queue should contain the ALTERNATING content of the 2 queues.
// The function should handle queues of different lengths without inserting
// undefined into the new one.
// Do not access the array inside the queue, only use 'add' and 'remove' and 'peek'
