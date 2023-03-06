function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

sumRange(4);

//returns 10

//Breakdown:
// And this case, whatever is returned 
//from the base case matters.

// It's added on to what the previous function call was waiting for, 
// and then that's added on and it has

// this reverse cascade going back up.


// 1st line, num is not 1, so go to next line
// 2nd line, returns:
    // 4 + sumRange(3) => needs to wait
    // 3 + sumRange(2) => needs to wait again
    // 2 + sumRange(1) => needs to wait
    //line 2 is finally true, so we return 1
        // popped off, now 2 + 1 = 3
        // popped off, now 3 + 1 = 4 + 6 = 10