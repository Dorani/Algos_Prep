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

  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    if (!found) return undefined;
    return false;
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }
}

//              10
//     6                 15

// 3      8                  20

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

tree.BFS();
tree.DFSPreOrder();
tree.DFSPostOrder();
debugger;
console.log(tree.DFSPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.DFSPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.BFS()); // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.contains(15)); // true
console.log(tree.contains(99)); // false
console.log(tree.find(15)); // true
console.log(tree.find(99)); // false
console.log(tree); // BinarySearchTree { root: Node { value: 10, left: [Node], right: [Node] } }
