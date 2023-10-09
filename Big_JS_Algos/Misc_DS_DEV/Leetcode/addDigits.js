// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1


// Breakdown:
//Formula for the Digital Root
// Approach 1: Mathematical: Digital Root
// There is a known formula to compute a digital root in a decimal numeral system

// How to derive it? Probably, you already know the following proof from school,
//  where it was used for a divisibility by 9: 
// "The original number is divisible by 9 if and only if the sum of its digits is divisible by 9".

// Consider separately three cases: the sum of digits is 0, the sum of digits is divisible by 9, and the sum of digits is not divisible by nine:
// dr10(n)=0 ,if n=0
// dr10(n)=9 ,if n=9k
// dr10(n)=n mod9, if n!= 9k

const addDigits = num => {
   if(num === 0) return 0;
   if(num % 9 == 0) return 9;

   return num % 9;
}

let num = 38;
console.log(addDigits(num));