
// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

//2 POINTER - LINKED LISTS

// This solution is based on the "two-pointer" method. We use two pointers to iterate over the two lists simultaneously,
// comparing their current values, and adding the smaller value to the merged list. 
// The process is repeated until one list is exhausted, after which the remaining nodes from the other list are simply appended.
// The use of a dummy node simplifies the process by providing a convenient starting point.

//Breakdown:
//Step 1. Create a Dummy Node:
//We create a dummy node with an arbitrary value (-1 in this case). 
//This dummy node is useful because it gives us a fixed starting point. 
//This way, we don't need to handle special cases for the head of the merged list separately. The current pointer is used to track where we are in the merged list.

//Step 2. Initializing Pointers for Both Lists:
//p1 and p2 are pointers initialized to the heads of list1 and list2 respectively. 
//These pointers will be used to traverse through each list.

//Step 3. Traverse and Compare Nodes:
// As long as neither p1 nor p2 has reached the end (null), we compare the values of the nodes they're pointing at.
// If p1.val is less than p2.val, it means the node in list1 is smaller. So, we append this node to our merged list
//(current.next = p1;) and move the p1 pointer to the next node in list1 (p1 = p1.next;).
// If p1.val is not less than p2.val, then we append the node from list2 to our merged list and move the p2 pointer
//to the next node in list2.
// After appending a node to the merged list, we move the current pointer to this latest appended node. 
//This ensures that current always points at the last node in the merged list.

//Step 4. Handling Remaining Nodes:
// Once the while loop completes, at least one of the original linked lists (either list1 or list2) will have been completely traversed.
// However, the other list might still have nodes left (since one list can be longer than the other).
// This code checks which list has remaining nodes and appends them to the merged list. 
// Since the original lists are already sorted, we can append all remaining nodes as they are.

//Step 5. Return the Merged List:
//return dummy.next
//dummy.next points to the head of our merged list.

const mergeTwoLists = (list1, list2) => {
  let dummy = new ListNode(-1);
  let current = dummy;

  let p1 = list1;
  let p2 = list2;


  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      current.next = p1;
      p1 = p1.next;
    } else {
      current.next = p2;
      p2 = p2.next;
    }

    current = current.next;
  }

  if (p1 !== null) {
    current.next = p1;
  } else if (p2 !== null) {
    current.next = p2;
  }

  return dummy.next;
};
