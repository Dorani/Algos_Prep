class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // insert(value) {
  //   const newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   } else {
  //     let current = this.root;
  //     while (true) {
  //       if (value === current.value) return undefined;
  //       //if val is less than root val
  //       //and there is no left property,
  //       //update current.left with the new node
  //       if (value < current.value) {
  //         if (current.left === null) {
  //           current.left = newNode;
  //           return this;
  //         } else {
  //           current = current.left;
  //         }
  //         //if val is less than root val
  //         //and there is no left property,
  //         //update current.left with the new node
  //       } else if (value > current.value) {
  //         current.right = newNode;
  //         return this;
  //       } else {
  //         current = current.right;
  //       }
  //     }
  //   }
  // }
}

const tree = new BinarySearchTree();

//              10
//     5                 13

// 2      7          11        16

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

tree;
