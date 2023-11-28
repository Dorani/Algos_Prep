## 257. Binary Tree Paths

### Companies: Bloomberg, Amazon, Apple

    - Given the root of a binary tree, return all root-to-leaf paths in any order.

    - A leaf is a node with no children.

Example 1:
![Alt text](https://assets.leetcode.com/uploads/2021/03/12/paths-tree.jpg)

Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]

Constraints:

The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100

## Breakdown:

- Approach 1: Preorder Traversal: Always Choose Left Middle Node as a Root
  Algorithm: [-10, -3, 0, 5, 9]

            00
            /\
        -10     5
            \    \
            -3   9

- Implement helper function helper(left, right), which constructs BST from nums elements between indexes left and right:

- If left > right, then there is no elements available for that subtree. Return None.

- Pick left middle element: p = (left + right) // 2.

- Initiate the root: root = TreeNode(nums[p]).

- Compute recursively left and right subtrees: root.left = helper(left, p - 1), root.right = helper(p + 1, right).

- Return helper(0, len(nums) - 1).
