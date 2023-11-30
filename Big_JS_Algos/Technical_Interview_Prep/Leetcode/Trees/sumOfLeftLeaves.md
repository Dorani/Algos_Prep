## 404. Sum of Left Leaves

### Companies: Amazon, Bloomberg, Adobe

- Given the root of a binary tree, return the sum of all left leaves.

Example 1:
![Alt text](https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg)

Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-1000 <= Node.val <= 1000

## Breakdown:

The code you provided is a JavaScript function named sumOfLeftLeaves. This function calculates the sum of values associated with left leaves in a binary tree. It uses recursion to traverse the tree and accumulate the sum.

Here's a breakdown of how the code works:

The sumOfLeftLeaves function takes two parameters: node and isLeft. node represents the current node being considered, and isLeft is a boolean flag indicating whether the current node is a left child of its parent. The isLeft parameter is set to false by default when the function is initially called.

The first two lines of the function handle base cases:

If node is null (i.e., the current node is a leaf node or an empty subtree), the function returns 0 because there's nothing to add.
If node is a leaf node (i.e., it has no left or right children), and it's a left child (isLeft is true), the function returns node.val (the value of the leaf node). Otherwise, it returns 0.
If the function hasn't returned yet, it means the current node has at least one child (either left or right). In this case, it recursively calls sumOfLeftLeaves on both the left and right subtrees.

When calling sumOfLeftLeaves on the left subtree, it passes true as the isLeft parameter to indicate that this subtree is on the left side of its parent.
When calling sumOfLeftLeaves on the right subtree, it passes false as the isLeft parameter to indicate that this subtree is on the right side of its parent.
Finally, the function returns the sum of the results from the left and right subtrees. If the current node is a left child (isLeft is true), it adds node.val to the sum. Otherwise, it just returns the sum of the left and right subtrees without including the current node's value.

The result of calling this function with the root node of a binary tree is the sum of values associated with left leaves in the tree.
