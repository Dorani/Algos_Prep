def search(arr, value):
    min_index = 0
    max_index = len(arr) - 1

    while min_index <= max_index:
        middle = (min_index + max_index) // 2
        current_element = arr[middle]

        if current_element < value:
            min_index = middle + 1
        elif current_element > value:
            max_index = middle - 1
        else:
            return middle

    return -1

print(search([1, 3, 5, 7, 9], 5))  # Output: 2
print(search([1, 3, 5, 7, 9], 6))  # Output: -1