/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// Time Complexity = O(m + n) ~ O(n)
// Space Complexity = O(1)


// Initialize two pointers, listA and listB, at the heads of headA and headB respectively.
// Copy code:
// let listA = headA;
// let listB = headB;


// Now we enter the while loop, which continues until listA and listB point to the same node.
// Copy code:
// while (listA !== listB) {
// If listA reaches the end (i.e., it becomes null), point it to the head of listB. If it hasn't reached the end, just move it to the next node.

// Copy code:
// listA = !listA ? (listA = headB) : (listA = listA.next);

// Similarly, if listB reaches the end, point it to the head of listA. If not, move it to the next node.
// Copy code:
// listB = !listB ? (listB = headA) : (listB = listB.next);

// When the loop exits, listA (and also listB since they'll be equal) will point to the intersection node. If there's no intersection, they'll both be null.
// Copy code:
// return listA;

// How and why does this work?
// The key insight is that, by switching heads, both listA and listB will traverse the same total number of nodes.
// If the two linked lists have an intersection, then by switching heads, both pointers will meet at the intersection point.
// If the two linked lists don’t intersect, then both pointers will reach the end of the combined sequence of nodes (both lists), thus both becoming null.
// This method ensures that the two pointers have the same distance to the intersection point. Consider two runners running on two tracks with different lengths. If, after reaching the end of their tracks, they switch and start running on the other's track, they will meet at a common point (the intersection), or both reach the end if there's no common point.
// The beauty of this approach is that it doesn't require any additional space or any changes to the linked lists themselves, and it can detect both the presence and absence of an intersection.

const getIntersectionNode = (headA, headB) => {
  let listA = headA;
  let listB = headB;

  while (listA !== listB) {
    listA = !listA ? (listA = headB) : (listA = listA.next);
    listB = !listB ? (listB = headA) : (listB = listB.next);
  }
  return listA;
};
