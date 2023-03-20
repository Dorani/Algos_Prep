
//Reverse
// Write a recursive function called reverse which accepts a string and 
// returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
    //base case
    if(str.length < 2) return str;
        //
        return reverse(str.slice(1, str.length)) + str[0];
}