## 897. Increasing Order Search Tree

### Companies: Google, Adobe, Facebook

- Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

Example 1:
![Alt text](https://assets.leetcode.com/uploads/2020/11/17/ex1.jpg)

Input:

- Input root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
- Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

Example 2:
![Alt text](https://assets.leetcode.com/uploads/2020/11/17/ex2.jpg)

Input: root = [5,1,7]
Output: [1,null,5,null,7]

Constraints:

The number of nodes in the given tree will be in the range [1, 100].
0 <= Node.val <= 1000

## Breakdown:

Initialize two variables, newRoot and newTree, to null. These variables will be used to build the new BST.

Define a helper function called helper that takes a node as its parameter. This function is a recursive function that will traverse the original BST and build the new BST.

Inside the helper function:

Check if the current node is null. If it is, return, as there's nothing to process for a null node.
Recursively call helper(node.left) to process the left subtree first.
After processing the left subtree, we check if newRoot is null. If it is, this means we are encountering the smallest node in the BST (the leftmost node), so we assign node to both newRoot and newTree.

If newRoot is not null, this means we have already encountered a node and need to connect the current node to the existing newTree. We do this by setting newTree.right to node, effectively adding node to the right of newTree. We then update newTree to point to this newly added node (newTree = newTree.right).

Additionally, we set node.left to null to avoid duplicate connections. This step is important to ensure that the new BST is formed correctly.

Finally, after processing the right subtree of the current node, the helper function returns, effectively completing the construction of the new BST.

Call helper(root) to start the recursion with the root of the original BST.

Return newRoot, which is the root of the newly constructed BST with nodes rearranged in increasing order.

In summary, this code rearranges the nodes of a given BST into a new BST where the nodes are in increasing order. It does so by traversing the original BST using an in-order traversal and reconfiguring the links between nodes to form the desired output BST.
