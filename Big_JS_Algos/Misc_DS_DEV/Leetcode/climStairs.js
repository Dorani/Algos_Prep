// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


//Breakdown:
// The function climbStairs(n) takes an integer n as input and returns the number of distinct ways you can climb the staircase.

// First, we handle the base cases where n is 0 or 1. In both cases, there is only one way to climb 
//the staircase (by taking all 0 steps or taking a single step). So, we return 1 directly.

// We create a new array called dp, which stands for Dynamic Programming. This array will be used 
//to store the number of ways to climb the staircase for different values of n. 
//We initialize the array with all elements set to 0.

// Since there is only one way to climb when n is 0 or 1, we set dp[0] and dp[1] to 1.

// Now, we use a for loop to calculate the number of ways to climb the staircase iteratively,
// starting from i = 2 up to n.

// In each iteration, we calculate the number of ways to climb i stairs as the sum of the number 
//of ways to climb i - 1 stairs (taking one step) and the number of ways to climb i - 2 stairs 
//(taking two steps).

// We continue this process until we reach the nth stair, and the loop completes.

// Finally, we return the value of dp[n], which contains the number of distinct ways to climb 
//the staircase.


//Tabulation Approach in Dynamic Program since n can not exceed 45 in this particular problem
//We took advantage of the bottom up approach, storing it for each iteration until i <= s
const climbStairs = s => {
    if(s === 0 || s === 1) return 1;

    const dp = new Array(s+1).fill(0);
    dp[0] = dp[1] = 1;

    for(let i = 2; i <= s; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[s];
}





