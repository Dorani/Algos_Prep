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
const countNodes = (root) => {
  const dfs = (node) => {
    if (!node) return 0;
    let leftSide = dfs(node.left);
    let rightSide = dfs(node.right);
    return leftSide + rightSide + 1;
  };
  return dfs(root);
};
