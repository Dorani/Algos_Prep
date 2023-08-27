/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
// we used BigInt() to convert binary to Integer. Syntax is BigInt(0b11) here `0b` is prefix and `11` is binary number, toString(2) converts to binary
return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};



//No built in function, manual but elegant:

var addBinary = function(a, b) {
    let carry = 0;
    let maxLength = a.length;
    
    if(a.length>b.length){
        b = "0".repeat(a.length - b.length) + b;
    }else{
        maxLength = b.length;
        a = "0".repeat(b.length - a.length) + a;
    }
    
    var result = "";

    for (let i=maxLength-1;i>=0;i--){
        sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        result = (sum % 2) + result; 
        carry = sum>=2?1:0;

    }
    if(carry){
        result = "1" + result;
    }
    return result;
};