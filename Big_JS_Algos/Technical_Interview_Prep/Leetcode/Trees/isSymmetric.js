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
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) return true;
  return isSame(root.left, root.right);

  function isSame(leftRoot, rightRoot) {
    if (
      (!leftRoot && rightRoot) ||
      (leftRoot && !rightRoot) ||
      (leftRoot && rightRoot && leftRoot.val !== rightRoot.val)
    )
      return false;
    if (leftRoot && rightRoot) {
      return (
        isSame(leftRoot.left, rightRoot.right) &&
        isSame(leftRoot.right, rightRoot.left)
      );
    }
    return true;
  }
};
