class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();

// Example 1
list.push("Hello");
list.push("You");
list.push("We made 3 nodes in a linked list!");
debugger;
console.log(list); // SinglyLinkedList { length: 3, head: Node { value: 'Hello', next: Node { value: 'You', next: [Node] } }, tail: Node { value: 'We made 3 nodes in a linked list!', next: null } }
