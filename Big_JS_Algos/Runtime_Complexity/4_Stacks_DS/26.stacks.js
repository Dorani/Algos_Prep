// Creating a stack data structure. that stack should be a class with methods
// push pop and peek. adding an element to the stack should store it until removed

class Stack {

  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }

}


const firstStack = new Stack()
firstStack.add(1)
firstStack.add(2)

firstStack.add(3)
console.log(firstStack);

