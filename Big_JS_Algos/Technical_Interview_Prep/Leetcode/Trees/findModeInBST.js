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

//create a func to perform in order traversal
//inside findeMode func
//create a inorder primary queue

//invoke inorder function we created on the root
//create 2 vars, 1 empty 'map' obj to store frequency, 1 maxFreq and make it -infinity
//count occurances with a standard frequency counter approach using a for loop and include maxFreq update

//create a result = [] so that:
//we loop through the nodes created in our obj with a let node in map and we push the ones with the highest
//frequecy ie, wtvr is === than maxFreq

//return the result arr

const inOrderTraversal = (root, result) => {
  if (!root) return null;

  inOrderTraversal(root.left, result);
  result.push(root.val);
  inOrderTraversal(root.right, result);
};
const findMode = (root) => {
  if (!root) return [];

  const result = [];
  const sortedValues = [];
  inOrderTraversal(root, sortedValues);

  let maxFreq = 0;
  let currentFreq = 0;
  let prevVal = null;

  for (const val of sortedValues) {
    if (val === prevVal) {
      currentFreq++;
    } else {
      currentFreq = 1;
      prevVal = val;
    }

    if (currentFreq === maxFreq) {
      result.push(val);
    } else if (currentFreq > maxFreq) {
      maxFreq = currentFreq;
      result.length = 0; // Clear the result array
      result.push(val);
    }
  }

  return result;
};

// Without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
// Perform an in-order traversal of the BST while keeping track of the current value and its count.
//This approach doesn't require additional data structures like arrays or maps to store values or counts.
//Here's the code for it:
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let maxFreq = 0; // Maximum frequency encountered so far
let currentFreq = 0; // Current frequency
let prevVal = null; // Previous value encountered

let result = []; // Result array to store the modes

const findMode1 = (root) => {
  if (!root) return [];

  // Initialize the variables before starting the traversal
  maxFreq = 0;
  currentFreq = 0;
  prevVal = null;
  result = [];

  // Start the in-order traversal
  inOrderTraversal1(root);

  return result;
};

// In-order traversal function
const inOrderTraversal1 = (node) => {
  if (!node) return;

  inOrderTraversal1(node.left);

  // Update frequency counts and check for modes
  if (node.val === prevVal) {
    currentFreq++;
  } else {
    currentFreq = 1;
    prevVal = node.val;
  }

  if (currentFreq === maxFreq) {
    result.push(node.val);
  } else if (currentFreq > maxFreq) {
    maxFreq = currentFreq;
    result = [node.val]; // Start a new mode list
  }

  inOrderTraversal1(node.right);
};
