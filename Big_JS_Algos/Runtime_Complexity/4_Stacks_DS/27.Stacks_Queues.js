// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2


const Stack = require('./16.stacks')
//we will create 2 stacks and manipulate them, and we will use those to fake
// the behavior of a queue, ie add, remove and Peek

//Stack 1 + Stack 2 = queue

//classic question

class Queue {
  //we need to create 2 stacks when we create an instances of this queue
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  //implemenet our add method
  //take the record and push it into stack 1
  add(record) {
    this.first.push(record)
  }

  //for every record in stack 1, we want to pop it out push it into stack 2
  //so we need to call the peek method to see if there are any remaining records
  //we call the peek method, so  as long as it finds a record, we will continue to push
  //while loop

  remove() {
    while (this.first.peek()) {
      const record = this.first.pop();
      this.second.push(record);
      //or do it like this => this.second.push(this.firstpop());
    }
    //save a reference to the record
    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    //the green record
    const record = this.second.peek()

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

// In order to give records in a stack the same functionality as a queue
// we will need to pop elements from it and put it in a new stack, so our order
// can be adhehered to.
//
// To itterate over the records, we will need to peek, then remove, and add into the B stack

// we then peek one more time on stack A to make sure no records are in there

// then we pop 1 record from stack b 1 time, to isolate our  green value.

//Finally we peek on stack B, to re pop records back into the Stack A
