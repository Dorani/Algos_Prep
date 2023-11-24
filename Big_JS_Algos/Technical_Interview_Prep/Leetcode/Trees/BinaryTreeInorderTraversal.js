const inOrderTraversal = (root) => {
  const data = [];

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    data.push(node.val);
    inOrder(node.right);
  }
  inOrder(root);
  return data;
};
