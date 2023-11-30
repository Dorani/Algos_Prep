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
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  function traverse(node) {
    if (!node) return 0;

    const left = traverse(node.left);
    const right = traverse(node.right);
    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }
  traverse(root);
  return diameter;
};
