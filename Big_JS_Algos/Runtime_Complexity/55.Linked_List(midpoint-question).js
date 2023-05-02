
// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.


// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.


// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }



// - A linked list will be passed as an argument




class Node {
  //for the last node on the chain, we set the next
  //node to be null => specificically set to null
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(values = []) {
    this.head = null;

    for (let value of values) {
      this.inserLast(value);
    }
  }
}

//the node at the very center
//the middle element in diagram 56 is red


//however if we have an even number of elements
//like in diagram 57, it would be that lil gap beteen red and orange
//look at the Directions
//take the first half list, and take the last node in that 1st half




//problem solving strategy:
//IMPORTANT FOR A LOT OF LINKED LIST QUESTIONS WITH BIG COMPANIES:


//To find the center node we are going to create 2 variables,
//one called slow, and the other..... fast!

// take both of these variables and point, ie assign them to the first node
//after that initial assignment
//we will interate through our linked list
  //for every step of our while loop we will advance our slow variable forward by one element
  //then our fast variable will more forward by 2 elements -digram 60-

// as soon as we advance to the next node, we will check to see if the next 2 nodes exists after fast
  // if they do, then everything is good, and we need to keep interating.
    // like look at the node that fast is pointing at, look at fast, are the next 2 node defined?
    // nope so slow is pointing at the midpoint! why cause its moving half as fast! so it must be at the midpoint!

  // if they do not exists, then we could consider fast to be at the end of the linked list
  // and consider slow to be the midpoint!



function midpoint(list) {
  let slow = list.getFirst(); //or list.head
  let fast = list.getFirst();



  //so long as the fast node has a node in front of that defined, and a node in front THAT defined also?
  while(fast.next && fast.next.next) {
    //then we want to continue advancing
    slow = slow.next;
    fast = fast.next.next;
  }
  //after the while loop run and there are no nodes after fast,
  //then just return slow ie the middle node
  return slow;
}
