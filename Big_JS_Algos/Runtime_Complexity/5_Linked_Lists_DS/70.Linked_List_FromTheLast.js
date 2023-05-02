// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'



//Diagram 71-74
// We will assume n is 3, so lets Id which element should we return.
// So if n = 3 we want to return the nth element that is 3 spaces from the last node
// in the last.


//How are we going to use 'slow' and 'fast' variables
//One will just be ahead in the list but it wont play like our previous examples

//Step 1:
  //we take both of our pointers
  //set them both equal to the 1st node in the list

//Step 2:
//Phase One:
  //take the n value and say we will advance our 'fast' pointer forward by 3 from the start
    //so now fast is pointing at orange
    //we do not touch the initialized 'slow' var

//Phase two:
  //we will advance slow and fast together 1 index at a time.
  //then we ask, is fast pointing at the last eleemtn of the linked list? if not...
  //continue to move both pointers foward by 1
  //then we ask, is fast pointing at the last eleemtn of the linked list? it is!
    // how do you know? well the next prop is pointing at null
    // and as soon as this is established, you can say that 'slow' is now 'n' elememts behind it




function fromLast(n, list) {
  //create 2 varibales and point them both at the first element in our linkedList
  let slow = list.getFirst();
  let fast = list.getFirst();

  //Phase1
  //then we need to adv 'fast' through the linked list forward by 'n' times
  while (n > 0) {
    fast = fast.next;
    //subtract 1 from n so it will moves 'fast' n elements forward
    n--;
  }
  //Phase2:
  //now its time to adv both of these pointers both 1 at a time until fast hits the tail of the node
  //while there is still some next node to visit
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  //as soon as fast.next no longer exists, the end, that means that slow must be n elements behind
  //so we can just return slow
  return slow;
}
