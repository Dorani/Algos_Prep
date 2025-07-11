# // Multiple Pointers - averagePair
# // Write a function called averagePair. Given a sorted array of positive integers and a target average,
# //determine if there is a pair of values in the array where the average of the pair equals the target average.
# // There may be more than one pair that matches the average target.

# // Bonus Constraints:

# // Time: O(N)

# // Space: O(1)

# // Sample Input:

# // averagePair([1,2,3],2.5) // true
# // averagePair([1,3,3,5,6,7,10,12,19],8) // true
# // averagePair([-1,0,3,4,5,6], 4.1) // false
# // averagePair([],4) // false

# // averagePair([10,12,23],2.5) // true

def average_pair(arr, avg):
    start = 0
    end = len(arr) - 1

    while start < end:
        temp_avg = (arr[start] + arr[end]) / 2
        if temp_avg == avg:
            return True
        elif temp_avg < avg:
            start += 1
        else:
            end -= 1

    return False