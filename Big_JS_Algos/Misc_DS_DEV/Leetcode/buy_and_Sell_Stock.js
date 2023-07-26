//You are given an array prices where prices[i] is the price of a given stock on the ith day.

//You want to maximize your profit by choosing a single day to buy one stock and choosing a
//different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

//check to see if that there are elements, otherwise return 0;

//set two pointers left and right, near each other ie 0,1
//set your window max that will increase as the pointers move
//while 1 < the entire arr, since it essentially starts at 1
//create the profit from the values of the right pointer - left
//if the profit is greater than the max
    //make the current max = profit

//if the profit < 0, ie negative number
//make left = right, so we can slide over and keep going till we get to the end

//right++ regardless of both ifs

//return the max


const maxProfit = (prices) => {
  if (!prices) return 0;

  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    let profit = prices[right] - prices[left];
    if (profit > max) {
      max = profit;
    }

    if (profit < 0) {
      left = right;
    }
    right++;
  }

  return max;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
