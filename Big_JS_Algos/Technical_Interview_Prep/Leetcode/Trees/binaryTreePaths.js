/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  if (root === null) return [];
  // If no children return the nodes value itself as a string within an array
  else if (root.left === null && root.right === null) {
    return [`${root.val}`];
  } else {
    // For all child paths add the root to their head one by one.
    let left = binaryTreePaths(root.left).map((x) => root.val + "->" + x);
    let right = binaryTreePaths(root.right).map((x) => root.val + "->" + x);
    // return the array with the root value attached
    return [...left, ...right];
  }
};
