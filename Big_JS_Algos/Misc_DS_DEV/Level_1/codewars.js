//Make a function that returns the value multiplied by 50 and increased by 6. 
//If the value entered is a string it should return "Error".

//function called multiples
//function takes parameter
    // parameter is number
    // if(the typeOf parameter != number) return 'error'

    //otherwise:
        //return result = parameter * 50 + 6


function multiples(number) {
    if(typeof number === 'string') return 'Error';
    let result = (number * 50) + 6

    return result; 
} 

console.log(multiples("HHELOO"));






