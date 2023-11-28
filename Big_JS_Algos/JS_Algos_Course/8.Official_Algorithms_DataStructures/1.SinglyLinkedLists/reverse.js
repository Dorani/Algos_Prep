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

  pop(val) {
    if (!this.head) return undefined;
    let current = this.head;
    let previous = current;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(value) {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    const node = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = node;
    node.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) this.pop();

    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);

list.print();

list.reverse();
list.print();

//Reverse:
// Initialize a variable node and set it to the current head of the linked list. This variable will be used to traverse the list.

// Update the head of the linked list to be the current tail. This effectively makes the tail the new head.

// Update the tail of the linked list to be the original head. This effectively makes the head the new tail.

// Initialize two more variables, prev and next. prev will be used to keep track of the previous node in the reversed list, and next will be used to temporarily store the next node in the original list as we reverse the pointers.

// Enter a loop that iterates through the list from the current node (which is now the original tail) to the end of the list (using this.length as the loop condition).

// Inside the loop, store the next node of the current node in the next variable. This is done to prevent losing the reference to the rest of the list.

// Update the next pointer of the current node to point to the prev node. This effectively reverses the direction of the pointer.

// Move the prev variable to the current node (effectively moving it forward in the list).

// Move the node variable to the next node (moving forward in the original list).

// Repeat steps 6-9 until the loop has iterated through the entire list, effectively reversing the pointers for all nodes in the list.

// Finally, return the modified linked list, which is now reversed.

// In summary, your reverse method traverses the linked list while reversing the direction of the pointers, resulting in the linked list being reversed in place. The time complexity of this algorithm is O(n), where n is the number of nodes in the linked list, as it iterates through the list once
