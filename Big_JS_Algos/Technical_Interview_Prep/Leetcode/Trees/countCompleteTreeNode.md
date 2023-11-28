## 222. Count Complete Tree Nodes

### Companies: Amazon, Google, Tiktok

    - Given the root of a complete binary tree, return the number of the nodes in the tree.

    - According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

    - Design an algorithm that runs in less than O(n) time complexity.

Example 1:
![Alt text](https://assets.leetcode.com/uploads/2021/01/14/complete.jpg)

Input: root = [1,2,3,4,5,6]
Output: 6
Example 2:

Input: root = []
Output: 0
Example 3:

Input: root = [1]
Output: 1

Constraints:

The number of nodes in the tree is in the range [0, 5 * 104].
0 <= Node.val <= 5 \* 104
The tree is guaranteed to be complete.

## Approach:

- You define a function countNodes that takes the root of the binary tree as its argument.

- Inside countNodes, you define a nested recursive function dfs(node). This function takes a node as an argument and returns the count of nodes in the subtree rooted at that node.

- In the dfs function, you first check if the current node is null (if (!node)). If it is, you return 0, indicating that there are no nodes in the subtree.

- Next, you recursively call dfs on the left and right children of the current node: let leftSide = dfs(node.left); and let rightSide = dfs(node.right);.

- You then calculate the total count of nodes in the current subtree by adding 1 (for the current node) to the counts of nodes in its left and right subtrees: return leftSide + rightSide + 1;.

- Finally, you return the result of the dfs function called on the root of the tree, which gives you the total count of nodes in the complete binary tree.

## Here's why this approach works efficiently:

- It takes advantage of the properties of a complete binary tree, where all levels are filled except possibly the last, and nodes in the last level are as far left as possible.

- By recursively exploring the left and right subtrees, you effectively divide the tree into smaller and smaller halves, reducing the number of nodes to count at each step.

- The time complexity of this approach is less than O(n) because it doesn't visit all nodes in the tree. In each step, it reduces the number of nodes to be counted by half, leading to a time complexity of O(log n), where n is the number of nodes in the tree.
