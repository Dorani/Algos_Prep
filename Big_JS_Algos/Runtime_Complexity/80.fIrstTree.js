// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree





class Node {
  //argument that represents the data we want to store at this particular nodes
  constructor(data) {
    this.data = data;
    //initialize an empty aray for storing children, and assign it that property
    this.children = [];
  }

  //ADD METHOD:
  //The parent node will have data, 123, and child node has data 789.
  //The parent has a reference to the child node in the children array

  //how does it get stored in the children array?
    //create a new node and push it into the children array

  add(data) {
    const node = new Node(data);
    this.children.push(node)

    // or
    //this.children.push(new Node(data));
  }

  //REMOVE METHOD:
  //IF we call remove on a single indivisual parent node, and trying to manipulate its children
    //we will look at the the 2 children node with data === to the data passed into remove
    //we will remove that node entirely

    //add or remove can be applied on any node

    //we will need to interate through first a list of nodes, then eval and remove
    //essentially, we will call the array type filter method, we will then look at
    //every node value and then finally reasign the children property

    remove(data) {
      //for every node in that array we will perform some type of check
      this.children = this.children.filter(node => {
        //return node.data that is no equal to the data we are looking for
        //if we return true we want to keep the element
        //if false 'remove' it
        return node.data !== data;
      })
    }

}

// FYI, If you want to add or remove nodes from the tree you need to specify which node
// we want to be adding or removing elements from.





//Step 2: create your tree class:
//2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree



// Here is the tree class, we are going to assign a root property to it.
// This root property is going to contain a reference to the absolutle head of our tree
// or the 'root node'.
//
// Also as a part of our tree class will be our traverse methods


// 1. Keep in mind that when you invoke breadth first, that you accept a function that
// gets called with every node in the tree.
//
// 2.Why do we really care about the order at which we visit a given node on the tree?
// hierarchical postiininig matters, so lets imagine you work at this company, so given this tree
// please print out all the positions in order of their respective ranks.
// In this case, breadth first traversal is good, start at the very top, with the ceo at the top level
// and work your way down in relation to order to importance.


// So how might we solve the BREADTH FIRST TRAVERSAL:
//   1 way: we create an empty array
//     we take the root node of our tree and push it into the empty array
//     then, while there are some elements in our array, take out the very 1st element
//     and retrieve all of this nodes children and stick them into THE END OF the array
//
//     then call our function with our node 20, then toss it away, cause it was processed
//     continue this entire process till you get through all the nodes.

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    //take the very top node, ie the root, and stick it into a brand new array
    const arr = [this.root]
    //now we can start to interate over this array
    while (arr.length) {
      //take the first element out of the array
      const node = arr.shift();
      //then take all of this nodes children and push them into the array
      for (let child of node.children) {
        arr.push(child);
        //call fn with the current node we are looking at
        fn(node);
      }
      // //OR: take every element out of this array and push them into arr
      // arr.push(...node.children)
    }
  }

  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      //now take the nodes children and add them to the front of the array
      arr.unshift(...children);
      fn(node);
    }
  }

}

// TO traverse through a tree using depth first, will be super close to breadth first

Start:
//1 way: we create an empty array
//     we take the root node of our tree and push it into the empty array
//     then, while there are some elements in our array, take out the very 1st element
//     and retrieve all of this nodes children and stick them into THE START OF the array





// first example:
// const node = new Node(1);
// cont tree = new Tree();
// tree.root = node;
