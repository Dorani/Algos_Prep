// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// sliding window approach) as it has a more efficient time complexity of O((N-M+1)M) 
//where N is the length of the haystack and M is the length of the needle


//In the sliding window approach, you maintain a window (a substring) of fixed size and 
//slide it through the larger string (haystack) to check for matches with the smaller string (needle). 
//In this solution, you are incrementing the left and right pointers to create the window and check for 
//matches within that window.

const strStr1 = (haystack, needle) => { // Function that takes two string inputs: haystack and needle.
    if (needle === "" || needle === haystack) return 0; // If the needle is empty or equal to the haystack, return 0 (edge case).

    let left = 0; // Initialize a variable 'left' to keep track of the left boundary of the search window.
    let right = needle.length; // Initialize a variable 'right' to keep track of the right boundary of the search window.

    while (left < haystack.length) { // Start a loop that runs as long as the 'left' pointer is within the bounds of the haystack.
        let strToBeSearched = haystack.slice(left, right); // Extract a substring from 'left' to 'right' from the haystack.

        if (strToBeSearched === needle) { // If the extracted substring matches the needle, we found a match.
            return left; // Return the index 'left' as the first occurrence of the needle in the haystack.
        } else {
            left++; // Move the 'left' pointer one position to the right.
            right++; // Move the 'right' pointer one position to the right.
        }
    }

    return -1; // If the loop finishes without finding a match, return -1 to indicate that the needle is not part of the haystack.
}



//Quick way:

const strStr = (haystack, needle) => {
    return haystack.indexOf(needle);
};