// Implement classes Node and Linked Lists
//1st piece of the linked List
//2 properties constructed and intialized

class Node {
  //for the last node on the chain, we set the next
  //node to be null => specificically set to null
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//2nd piece:
//initialize our linked list with a constructor
//with no nodes associated with it
//1 property called head, ref to the 1st node = null

//linked list class has no idea about how many nodes belong to it
//or what data is associated with it

//it only knows about the 1st node

//we will put together all the handy methods
//to access the first node
//and crawl through the chain and work with the other elements inside

class LinkedList {
  constructor() {
    this.head = null;
  }
  //INSERT_FIRST METHOD takes some amount of data for it's first arg
  //the purpose, is to create a brand new node out of data
  //then assign the resulting node to the head property of our linked list
  //when we create a linked a new linked list, its completely empty so
  // we use this method to initialize a linked list and get an initial node

  //insert method only, we are not overriding any nodes
  // we want to create a brand new node 456
  // and we want its next prop to look at the existing node in the chain
  // anddd update the head reference

  insertFirst(data) {
    const node = new Node(data, this.head); //sets up the relationship of a linked list chain
    //we then need to repair the head reference, looking at the new node
    this.head = node;

    //one line of code
    // this.head = new Node(data, this.head)
  }

  //SIZE METHOD:
  //1ST opportunity to iterate/walkthorugh a linked list
  //returns the number of nodes in a linked list
  //list.size
  //tricky tricky
  size() {
    //totals up the number of nodes inside our linked list
    let counter = 0;

    //then we need a reference directly to the head node of our linked list
    let node = this.head;

    //evaluation, if the linked list does not have a head node assign to it
    //then it will check if there is a node
    // if a node does exist, then the while loop will enter the body
    //we imediately increment our counter, because we found at least 1 node
    //then we will look at the current node, and look at it's next property
    //the next property will either be another node or the value null
    //if its null that means no other nodes, we then take the next node and assign it to var node
    //then back up to the while look and eval if its truthy or falsy
    //this process continues over and over again
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  //GET_FIRST METHOD
  //supposed to return a node, the 1st node of the linked list
  //the head property has a reference to the 1st node of te linked list

  getFirst() {
    //always be pointing at the very first node on the linked list
    return this.head;
  }

  //GET_LAST METHOD
  //to find and return the very last node of our linked list
  //we can always figure out if a node is the last one, when the value of next is null

  getLast() {
    // if there is no node then get out
    // if there is not head element then return null
    // otherwise we want to continue inside the method and do some work
    if (!this.head) {
      return null;
    }
    // to iterate through the linked list and get to the last node
    // we will use the size method, get a reference to the current node
    // and then iterate through the node, and as long as there is one
    // we will continue through the while loop
    let node = this.head;
    while (node) {
      if (!node.next) {
        // as soon as we find the very last node (next = null) and we should return it
        return node;
      }
      node = node.next;
    }
  }

  //CLEAR METHOD:
  //is a method to completely empty out our linked list of any nodes
  //linked lists only know if any nodes exists through the head property
  //so if we simply 0 out (reasign it to something else) the head property, then it behaves as if the list doesn't exists

  clear() {
    //no more nodes
    //we cleared out the lists
    //we now have no reference to the list of nodes
    //maybe the list is out there floating in memory
    //but we don;t care :)
    this.head = null;
  }

  //REMOVE_FIRST METHOD
  //remove only the first node of the linked list
  //reasign the list head property to now look out the second node
  //as a reference

  removeFirst() {
    if (!this.head) {
      return;
    }
    //update this.head to look at the second node
    this.head = this.head.next;
  }

  //REMOVE_LAST Method
  //removes the last node of the chain

  // How to approach this:
  // introduce 2 temporary variable
  //   previous and node
  //   previous will look at the very first node of our chain
  //   and node will look at the second
  //
  //   we will then iterate through our linked list
  //   and for every iteration we will move these references forward
  //   one node to the right. as soon as we find a node with a next value of null
  //   we are at the end of our chain
  //
  //   so we can remove the node @ node
  //   so we go to the previous node on the chain
  //   and set that nodes next property to null

  removeLast() {
    //check to see if there is not a head node and list is empty and return
    if (!this.head) {
      return;
    }
    //check to see if we have 1 node, ie a length of 1
    //so if there is not some second node there we stop
    if (!this.head.next) {
      this.head = null;
      return;
    }

    //start off by getting a reference to the first node and and the second
    let previous = this.head;
    let node = this.head.next;

    //as long as node.next exists => additional element we need to iterate through
    //is node. next defined?
    while (node.next) {
      //we will update the value of previous to be the current node
      previous = node;
      // and node will be set to node.next
      node = node.next;
    }
    //once we hit the end of the chain we need to delete the last node
    //how do we do that, go back to the previous node and update its next property to null
    previous.next = null;
  }

  //INSERT LAST:
  //Will be called with some data argument
  //take this data argument
  //create a new node
  //stick data into that node
  //then insert that into the very end of our chain

  //so the best way to do this, we need to make sure we get a reference to the current last node
  //then we can set the current last nodes next property to look at the new orange one we want to create
  //we already wrote a method called get last that will already give us the last node inside of a linked list
  //always look to reuse methods you already created, so you can take that and add code to it to accomplish the task

  //so first lets handle the case to see if our list is empty

  insertLast(data) {
    //getting a reference to the last node in a our current linked list
    const last = this.getLast();
    //we should put in some type of check to see if we do not have any nodes inside our node at all
    if (last) {
      //there are some existing nodes in our chain
      //create our new node and pass in data to it
      //set the previos node on the chain
      last.next = new Node(data);
    } else {
      //the chain is empty
      //we have no new last node
      // we want to create the node and set it to the linked list head property
      //the very first node of our chain
      this.head = new Node(data);
    }
  }

  //GET AT METHOD:
  //Iterate through our linked list and find some particular element at some given index
  //which we provided to us as argument in the getAt(integer ie index)

  // first thing to keep in mind
  // linked list are 0 indexed, just like arrays, so the very firt element of our linked list
  //has an index of 0
  // after calling getAt(3) we want to return the entire node, not just the data, but the entire
  //node at that particular index

  //So how is this going to work?
  //we need 3 temp variables, node, want index, and counter
  //start by creating node that will start off looking at the first node in our chain
  //then a counter variable with 0
  //while loop, if the index we want is === counter, then we must of reached the node we care about
  //then take that node and return it
  // otherwise advance through to the next node while also increment the counter var
  //check to see if counter is === index, not so advance the counter and node
  // once they are equal return that node!

  //2 edge cases:
  //we have no nodes at all, and we have an empty linked list,
  //so we need a simple check to see if we have at least 1 node
  //we can interate through
  //otherwise we should return null or we cant find that element

  //what if someone calls getAt() with an index that outside the realm of the entire lenggth of the list?
  //we can call the size method, before any interation to see if the size is greater than our index
  //ok they are asking for a valid index
  //then we can interate
  //2 interations? not efficient...

  getAt(index) {
    // check to see if there is a head node
    // then return null

    if (!this.head) {
      return null;
    }

    let counter = 0;
    //look at the first node in the chain
    let node = this.head;

    //as long as a node is present
    while (node) {
      //then we can check if counter is === to index we are trying to retrieve
      //that means we found the node at the given index
      if (counter === index) {
        return node;
      }
      //otherwise we itterate and increment counter and move along to the next node
      counter++;
      node = node.next;
    }
    //if we exit the while loop because we asked for an index that we can not retrieve while running while loop
    return null;
  }

  //REMOVE_AT METHOD:

  //We are going to call remove at at a particular index.
  //we will remove a node at a given chain

  //so for example we want to remove the node at index 1 given this chain
  //the first element at a linked list will have an index of 0
  //so we if want to move an element at index 1
  //we have to find the previous node in the chain and update its next reference
  //to skip over that one and goes to the preceding node.
  //now our linked list skips blue
  //which means it exists in memory but it is no longer part of the chain!

  //Edge cases:
  //make sure our linked list doesnt crash if we call remove at with no elements
  //or remove element at index 1 but there is only 1 element
  //or if we want to remove element at index 10 but only 2 elements exisits in the chain?

  // We can use get at, which retrieves an element at a particular index.
  // for example if we want to remove an element at index 1
  // we would call getAt(0) at index 0
  // then we can update the next property on it, to reference the red element

  //Now let's address edge cases:
  // 1. make sure our linked list doesnt crash if we call remove at with no elements

  // 2. Case where we try to delete the 1st node, reuse getAt() with the above strategy

  removeAt(index) {
    // if there is no head element then return right away
    if (!this.head) {
      return;
    }

    //the case in which we are trying to remove the very first element
    if (index === 0) {
      //point at the second element in the chain, even if it has one element in the chain
      this.head = this.head.next;
      return;
    }

    //reuise our getAt() method to attempt to find the previous node
    const previous = this.getAt(index - 1);
    //If we found the previous node we need to make sure we update the next property to
    //to look into the future, ie previous.next looks at the current next.next

    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
    //3rd case: removeat on an index greater than the total number of nodes
    //ie removeat(12) when we only have 3 nodes
    //remember that the getAt method is wired up to return null when we try to find an element that is not in the list
    //so check line 334 for this functionality
    //if previous was not found or if previous does not have a next node
    //return
  }

  //Insert at method
  // called with some amount of data and an integer index where this node should be inserted
  //if the index is out of bounds then we want to add the node to the end of the list
  // we are going to be providing the data field
  //we are not overriding anything
  //we are simply insert a new node located at an index

  //2 edge cases
  //insert a node in a empty list
  //the provided index is out of bounds

  //getAt method to get a reference to the previous node in the chain
  //then we create the new node, and make sure the previous node points to the new one
  //and that the new one points to the old one.

  insertAt(data, index) {
    //if our list has no element, then we create a new element and point our head prop to that element
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    //case if want to insert it at the begining
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    //last big case:
    // we are going to want to find the previous element, the one we want to find before we insert the node ahead of it
    const previous = this.getAt(index - 1 || this.getLast());
    //we will then create our new node and pass in the current node after previous
    //and we will pass in red as the second argument to it.
    //since blue is still looking at red we need to fix that

    //but first we need to point the new orange node to red
    const node = new Node(data, previous.next);

    //now we need to make previous look at the orange node
    previous.next = node;

    //if we have a get index of 12, when we call get at we will get null returned
    //last case: when index is out of bounds node has to be added to end of the list
    // if this returns a falsey value we will create an OR case and we will instead run code on line 370 which
    // essentially says go and get the last node in our chain, then it gets assigned to previous
    // we will then create our new node, and the new node next prop will be previous. next
    // then previous.next is now point over to orange
  }
}
// -------------------------------------------------------------------------------
// //FOR EACH FUNCTION
// //We can pass in our own interator function
// //Iterates through every node of the chain and the index of the node
// //the node and index should be passed as an arg of our function

list.forEach((node, index) => {
  node.data += 10;
});

// Ok lets make a linked list, and maybe you should write a method that retrieves the first element
// question to ask: hey are we going to be doing any retrieval of any other elements? because of we are, maybe I shouldnt write
// an insertFirst() method, maybe I should just write an insertAt(data, 0) method.

// ie: insertFirst(data){
//   return this.insetAt(data,0)
// };
// //reusability, effeciency, and pure awesomeness
// //this passes all tests

// getLast() {
//   return this.getAt(this.size() - 1)
// }

// list.forEach((node , index){
//   node.data += 10;
// });

//Interview Question about linked lists: See section 55
