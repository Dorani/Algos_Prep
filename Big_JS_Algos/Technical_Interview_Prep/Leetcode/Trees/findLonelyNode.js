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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  let result = [];
  const helper = (root) => {
    if (!root) return null;
    const left = helper(root.left);
    const right = helper(root.right);

    if (!left || !right) {
      if (!left && !right) return root.val;
      result.push(left || right);
    }
    return root.val;
  };
  helper(root);
  return result;
};
