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
 * @param {number} val
 * @return {TreeNode}
 */
const closestValue = (root, target) => {
  //if we have no root or target then there's no work to be done, return
  if (root === null || target === null) return;
  //declare diff and val as Infinity since we are looking for lower numbers as we go
  let diff = Infinity;
  let val = Infinity;

  const search = (node) => {
    if (!node) return;
    let currDiff = Math.abs(node.val - target);
    //if our current node's difference is lower than our tracked diff OR they are equivalent and our current node's value is lower, then change diff to the current difference and value to our current node's value
    if (currDiff < diff || (currDiff === diff && node.val < val)) {
      diff = currDiff;
      val = node.val;
    }
    //continue going down the BST
    if (node.val > target) {
      search(node.left);
    } else {
      search(node.right);
    }
  };
  search(root);
  return val;
};
