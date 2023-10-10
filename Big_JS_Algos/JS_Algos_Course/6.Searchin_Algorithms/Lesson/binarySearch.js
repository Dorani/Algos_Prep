function search(arr, value) {
    let min = 0;
    let max = arr.length - 1;

    while (min < max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if(arr[middle] < val) {
            min = middle + 1;
        } else if(arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}








//pick a middle point, cause it's sorted
//ie half of the arr lengths
//is the value we are looking for > than the current index
//move accordingly.

// Time Complexity is Log(N) => binary search, commonly used pattern for larger data sets. 

