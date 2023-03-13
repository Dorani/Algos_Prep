//Iterative Way:
function factorial(num) {
    if(num === 0) {
        return -1
    }
    let total = 1;
    for(let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}




//Recursive way:
function factorialRecursive(num) {
    if(num === 1) {
        return 1;
    }
    return num * factorialRecursive(num -1)
}

factorialRecursive(6);