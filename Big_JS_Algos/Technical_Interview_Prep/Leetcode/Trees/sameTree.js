/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isSameTree = (q, p) => {
  let isSame = true;
  bfs(q, p);
  return isSame;

  function bfs(q, p) {
    if ((q === null && p !== null) || (q !== null && p === null)) {
      isSame = false;
      return;
    }

    if (q === null && p === null) return;
    if (q.val !== p.val) {
      isSame = false;
      return;
    }

    bfs(q.right, p.right);
    bfs(q.left, p.left);
  }
};
