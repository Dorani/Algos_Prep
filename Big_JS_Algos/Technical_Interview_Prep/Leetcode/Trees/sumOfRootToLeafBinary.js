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
const sumRootToLeaf = (root) => {
  const traverse = (node, str) => {
    if (!node) return 0;
    str += node.val;

    if (!node.left && !node.right) return parseInt(str, 2);
    return traverse(node.left, str) + traverse(node.right, str);
  };
  return traverse(root, "");
};
