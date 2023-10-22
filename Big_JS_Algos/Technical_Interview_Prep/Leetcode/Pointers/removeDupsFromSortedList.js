//2 pointer approach:
// Init prev as 1st node, next as 2nd node

// Iterate until next is null, which is end of list
// If next is a duplicate, skip over it by pointing its prev to its next
// Else, just move prev forward to continue through the list
// Always move next forward, it moves along with prev
//return head, which is the non duplicated linkedlist


//Breakdown:
// The function takes the head of the linked list as input.

// It first checks if the head is null (empty linked list). If so, it immediately returns null, as there are 
//no duplicates to remove.

// Two pointers, prev and next, are initialized. prev points to the current node, and next points to the 
//next node in the linked list.

// The function then enters a while loop that iterates through the linked list as long as next is not 
//null (indicating we have not reached the end of the list).

// Within the loop, it checks if the value of prev and next are equal. If they are, it means there is a duplicate. 
//In this case, it updates the prev.next pointer to skip the duplicate node by pointing to the next.next node, 
//effectively removing the duplicate node from the linked list.

// If the values are not equal, it means there is no duplicate, and it moves both prev and next to their 
// next nodes to continue the iteration.

// The loop continues until we reach the end of the linked list.

// Finally, the function returns the head of the modified linked list, which will have duplicates removed 
//and will be sorted as well.

// The code is efficient because it iterates through the linked list only once, making it a linear-time operation,
//O(n), where n is the number of nodes in the linked list. Additionally, it modifies the linked list in-place 
//without requiring any extra space, ensuring constant space complexity, O(1).


const deleteDuplicates = (head) => {
  if (!head) return null;

  let prev = head;
  let next = head.next;

  while (next) {
    if (prev.val === next.val) {
      prev.next = next.next;
    } else {
      prev = prev.next;
    }
    next = next.next;
  }

  return head;
};



//More readable and slightly faster:
const deleteDuplicates1 = (head) => {
    if (!head) return null;
  
    let current = head;
  
    while (current && current.next) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    return head;
  };
  