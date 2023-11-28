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
const minDiffInBST = (root) => {
  let min = Infinity;
  let prev;

  const helper = (root) => {
    if (root == null) return;
    helper(root.left);
    if (prev != null) min = Math.min(min, root.val - prev.val);
    prev = root;
    helper(root.right);
  };

  helper(root);
  return min;
};
