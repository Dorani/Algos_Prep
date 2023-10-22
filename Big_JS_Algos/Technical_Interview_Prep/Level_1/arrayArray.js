//1. You are given an initial 2-value array (x). You will use this to calculate a score.

//If both values in (x) are numbers, the score is the sum of the two.
//If only one is a number, the score is that number. 
//If neither is a number, return 'Void!'.

//Once you have your score, you must return an array of arrays. 
//Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].


const explode = (x) => {
    let score = 0;

    const firstEl = x[0];
    const secondEl = x[1];

    if(typeof firstEl === 'number' && typeof secondEl === 'number') {
        score = firstEl + secondEl;
        return Array.from({length: score}).fill(x);
    } else if(typeof firstEl === 'number' || typeof secondEl === 'number') {
        score = typeof firstEl === 'number' ? firstEl : typeof secondEl === 'number' ? secondEl : 0;
        return Array.from({length: score}).fill(x);
    } else if(typeof firstEl != 'number' && typeof secondEl != 'number') {
            return 'Void!'
        }
}

explode([2,3])
explode(['a',3])
explode([2,3])
