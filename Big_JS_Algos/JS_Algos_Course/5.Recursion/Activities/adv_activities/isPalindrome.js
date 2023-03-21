//isPalindrome:
// Write a recursive function called isPalindrome which returns true if
// the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


//id edge case of (str)
//if there str.length === 1 return str
// reverse str and see if it is equal to str

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];

    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}