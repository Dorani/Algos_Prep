// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
 

// Constraints:

// -231 <= n <= 231 - 1
// An ugly number is a positive integer. As per constraints −231≤n≤231−1 -2^{31} \leq n \leq 2^{31} - 1, 
// we can have non-positive integers. Since a non-positive integer cannot be ugly, we can immediately return false if n≤0n \leq 0n≤0.
// For n>0n > 0n>0, we have to examine if the integer is an ugly number or not.
// As per the given definition, the only permitted prime factors for an ugly number are 2, 3, and 5. Thus, if we remove all 2's, 3's, and 5's from the prime factorization of this integer, we can check if there is some other prime in the remaining factorization or not.

// What we can do is check if the integer is divisible by 2 or not. If yes, then we have obtained one prime factor as 2. 
// Then, we have to find the prime factors of the integer obtained by dividing this integer by 2. 
// We will keep dividing our integer by 2 when it is divisible by 2.

// At this point, this integer is no longer divisible by 2. Thus, try dividing it with the next permitted 
// factor, i. e. 3. Keep dividing the integer by 3 when it is divisible by 3.

// At this point, this integer is no longer divisible by 2 or by 3. Thus, try dividing it with the next permitted 
// factor, i. e. 5. Keep dividing the integer by 5 when it is divisible by 5.

// Now, the integer is no longer divisible by 2, 3, or 5. If this integer is not equal to 1, 
// we can deduce that there are other prime factors of this integer, apart from 2, 3, and 5. 
// Hence, the number is not ugly. If the integer was 1, the number is ugly.


//Approach:


const isUgly = n => {
    if(n <= 0) return false;

    const keepDividingWhenDivisible = (dividend, divisor) => {
        while(dividend % divisor === 0) {
            dividend /= divisor;
        }
        return dividend;
    }

    for(factor of [2,3,5]) {
        n = keepDividingWhenDivisible(n, factor)
    }

    return n === 1;
}