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
const searchBST = (root, val) => {
  if (!root) return null;

  if (root.val === val) {
    return root;
  }

  if (root.val < val) {
    return searchBST(root.left, val);
  }
  if (root.val > val) {
    return searchBST(root.right, val);
  }
};

//create empty arr data
//if there is no root, return []

//if(root.val < val && root.left) searchBST(root.left)
//if(root.val === val)
//data.push(root.val)
//if(root.val > val && root.right) searchBST(root.right)
