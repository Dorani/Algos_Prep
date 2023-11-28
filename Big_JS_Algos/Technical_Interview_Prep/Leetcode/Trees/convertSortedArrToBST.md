## 108. Convert Sorted Array to Binary Search Tree

### Companies: Amazon, Google, Tiktok

    -Given an integer array nums where the elements are sorted in ascending order, convert it to a
    height-balanced binary search tree.
    - A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Example 1:
![Alt text](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:
![Alt text](https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg)

Example 2:

![Alt text](https://assets.leetcode.com/uploads/2021/02/18/btree.jpg)
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.

## Breadown:

- There are two general strategies to traverse a tree:

- Depth First Search (DFS)

  - In this strategy, we adopt the depth as the priority, so that one would start from a root and reach all the way down to a certain leaf, and then back to the root to reach another branch.

  - The DFS strategy can further be distinguished as preorder, inorder, and postorder depending on the relative order among the root node, left node, and right node.

- Breadth First Search (BFS)

  - We scan through the tree level by level, following the order of height, from top to bottom. The nodes on higher levels would be visited before the ones with lower levels.

In the following figure, the nodes are enumerated in the order you visit them, please follow 1-2-3-4-5 to compare different strategies.![Alt text](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/Figures/108/bfs_dfs.png)

## Approach 1: Preorder Traversal: Always Choose Left Middle Node as a Root

![Alt text](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/Figures/108/left.png)

- Implement helper function helper(left, right), which constructs BST from nums elements between indexes left and right:

  - If left > right, then there is no elements available for that subtree. Return None.

  - Pick left middle element: p = (left + right) // 2.

  - Initiate the root: root = TreeNode(nums[p]).

  - Compute recursively left and right subtrees:
    - root.left = helper(left, p - 1),
    - root.right = helper(p + 1, right).

- Return helper(0, len(nums) - 1).
