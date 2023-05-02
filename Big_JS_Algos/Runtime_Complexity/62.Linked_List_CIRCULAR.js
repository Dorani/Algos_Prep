// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true



//Remeber now, the keyword here is circular. A linked list tradtionally has a head and a tail.

//Now the tail node can be IDENTIFIED because it points to the value of null.

//With a circular linked list we do not have a tail node, we would have a last node that points at
//an earlier node in the linked list

//They are a huge problem, why?
  //well because we wrote a lot of while loops in our methods that essentially
  //assumed they would iterate and find a node with a next value of null.
  //this will utimately create an infinite loop, over and over cause they will never find the value of null...
  //see figure 63


//So what should we do?
  //Create a function that will detect the above situation that you can also see in diagram 63.

//In an interview you want to provide a comprehensive solution and good approaches:
  // DO NOT ADD NEW PROPERTIES...

  //We will use 2 seperate pointed, to iterate through our linked list at different speeds
  //initialize slow and fast SEE FIGURE 64
  //if the next 2 nodes after fast are defined, we will enter a for loop,
    //inside the for loop we are going to move 'fast' forward by 2 nodes
    //'slow' forward by 1 node forward
    //then we will perform check, === comparison, are these 2 variables pointing at the same node in the linked list?
    //if they are... we will get to that.
    //otherwise keep going through the list and checking our condition, if not move on..
    //until slow and fast are both pointing at the same node
    // and if they are, that means that we must have a circular linked list => true

    //now to return false we ultimately need to establish if the purple node's next property, in figure 69, is presumebly
    //is pointing at null

    //ok so we would ask if 'fast' next node null or the one preceeding that, null?
    //it is! so that means there is an end to the linked list and we would return false
















function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    //we are not comparing the data in the linked list nodes
    //because the linked list could have multiple nodes with the same data in them
    //so what we are doing here is making sure that a reference to an obj 'slow'
    //is tripple equal to a reference to an obj 'fast'
    //is slow looking at a node, that is identical, ie the exact same instance in memory as 'fast'
    //if they are, great! we must have a circular linked list and return true!
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
