// Creating a stack data structure. that stack should be a class with methods
// push pop and peek. adding an element to the stack should store it until removed

class Stack {

  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }

}
