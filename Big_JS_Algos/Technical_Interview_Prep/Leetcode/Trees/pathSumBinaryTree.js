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
 * @param {number} targetSum
 * @return {boolean}
 */

const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  targetSum -= root.val;
  if (!root.left && !root.right) return targetSum === 0;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

// Time complexity : we visit each node exactly once, thus the time complexity is
// O(N)\mathcal{O}(N)O(N), where NNN is the number of nodes.

// Space complexity : in the worst case, the tree is completely unbalanced,
//e.g. each node has only one child node, the recursion call would occur NNN times
//(the height of the tree), therefore the storage to keep the call stack would be
//O(N)\mathcal{O}(N)O(N). But in the best case (the tree is completely balanced),
//the height of the tree would be log⁡(N)\log(N)log(N).
//Therefore, the space complexity in this case would be O(log⁡(N))\mathcal{O}(\log(N))O(log(N)).
