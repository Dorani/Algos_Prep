const validPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < s.length) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    } else {
      left++;
      right--;
    }
  }
  return true;
};

const isPalindrome = (str, low, high) => {
  while (low < high) {
    if (str[low] !== str[high]) return false;
    low++, high--;
  }
  return true;
};
