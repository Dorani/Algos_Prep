## 897. Increasing Order Search Tree

### Companies: Google, Adobe, Facebook

- Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

- If the tree has more than one mode, return them in any order.

- Assume a BST is defined as follows:
  - The left subtree of a node contains only nodes with keys less than or equal to the node's key.
    The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
    Both the left and right subtrees must also be binary search trees.

Example 1:
![Alt text](https://assets.leetcode.com/uploads/2021/03/11/mode-tree.jpg)

Input: root = [1,null,2,2]
Output: [2]

Example 2:

Input: root = [0]
Output: [0]

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

## Optimized Breakdown:

We use global variables maxFreq, currentFreq, prevVal, and result to keep track of the maximum frequency, current frequency, previous value encountered, and the result array.

We perform an in-order traversal of the BST by calling inOrderTraversal on the root.

In the inOrderTraversal function, we update the frequency counts and check if the current value is a mode or part of a new mode.

We keep track of the maximum frequency encountered and update the result array accordingly.

This code should find and return the modes of the BST without using any extra space beyond the global variables and the implicit stack space due to recursion.
