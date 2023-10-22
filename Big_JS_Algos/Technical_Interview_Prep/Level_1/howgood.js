// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


//create an array of scores
const scores = [85, 100, 55, 83, 99, 23];
//declare my own personal score
const myScore = 77;


//create a function that accepts a parameter of an array of numbers representing test scores
const avgScoreComparator = (scores) => {
    //create a variable to store the avg test score and total
    let medianScore = 0;
    let total = 0;
    //create a for loop to iterate through scores
    for(let i = 0; i < scores.lenght; i++) {
        //create a variable called total and add up all the scores[i] elements
        total += scores[i];
        //create a variable called medianScore and take total / 6
        medianScore = (total) / 6; 
    }
    //if myScore >= medianScore 
    if(myScore >= medianScore) {
        return true;
    } else {
        return false;
    }
}

avgScoreComparator(scores);