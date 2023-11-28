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
 * @return {TreeNode}
 */
const increasingBST = (root) => {
  let newRoot = null;
  let newTree = null;

  const helper = (node) => {
    if (!node) return;
    helper(node.left);

    if (!newRoot) {
      newRoot = node;
      newTree = node;
    } else {
      newTree.right = node;
      newTree = newTree.right;
      //set left to null to avoid dups
      node.left = null;
    }
    helper(node.right);
  };
  helper(root);
  return newRoot;
};
