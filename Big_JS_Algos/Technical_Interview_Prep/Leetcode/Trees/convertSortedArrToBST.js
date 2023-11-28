/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  const helper = (left, right) => {
    if (left > right) return null;
    let m = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[m]);
    root.left = helper(left, m - 1);
    root.right = helper(m + 1, right);
    return root;
  };
  return helper(0, nums.length - 1);
};
