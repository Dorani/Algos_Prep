class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
const first = new Node(10);
const second = new Node(11);
const third = new Node(12);

list.push(first);
list.push(second);
list.push(third);
debugger;
console.log(list); // DoublyLinkedList { head: Node { val: 10, next: Node { val: 11, next: [Node], prev: [Circular] }, prev: null }, tail: Node { val: 12, next: null, prev: [Node] }, length: 3 }
