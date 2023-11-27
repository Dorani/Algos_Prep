## 270. Closest Binary Search Tree Value

### Companies: Facebook, Amazon, Coupang

    - Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. If there are multiple answers, print the smallest.

    - A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Approach:

- Magnitude of Difference: The absolute difference between two values provides a straightforward measure of how close or far apart those values are. Smaller differences indicate closer values, while larger differences indicate more distant values.

- Comparing Differences: By calculating and comparing the absolute differences between the values of nodes and the target value, you can identify which node's value is closer to the target.

- Tracking the Closest Value: As you traverse the BST and update the closest difference and closest value encountered so far, you ensure that you always have the best candidate for the closest value.

- Optimizing the Search: By comparing the absolute differences, you can determine whether to continue the search in the left subtree or the right subtree based on which direction is more likely to lead to a closer value. This allows you to optimize the search process.

Example 1:

![Alt text](https://assets.leetcode.com/uploads/2021/03/12/closest1-1-tree.jpg)
Input: root = [4,2,5,1,3], target = 3.714286
Output: 4
Example 2:

Input: root = [1], target = 4.428571
Output: 1

Constraints:

The number of nodes in the tree is in the range [1, 104].
0 <= Node.val <= 109
-109 <= target <= 109
