// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 remembers how many times you run it. It contains a closure?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1, it remembers how many times you call the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be preferable if we need to remember a piece of information for the next time the function is called.
 * counter2 would be more preferable if we need the function to just do what it's told over and over without remembering previous callings of it.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}



const counter1 = counterMaker();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());


let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2);
// console.log(counter2);
// console.log(counter2);
// console.log(counter2);
// console.log(counter2);



/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(num){
  // console.log(`Inning #${num}`);
  return (Math.floor(Math.random()*3));
}
// console.log(inning());

// function inning(numOfInnings){
//   const rand = Math.floor(Math.random()*3);
//   for (let i=1; i <= numOfInnings; i++){

//   }


// }
// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
// function finalScore(inning, innNum){
//   let home = 0;
//   let away = 0;
//   for (let i = 1; i <= innNum; i++){
//     // console.log(inning);
//     home = home + inning;
//     away = away + inning;
//     console.log(`Home: ${home}`);
//   }
//   return [`Home: ${home}`, `Away: ${away}`];
// }
// console.log(finalScore(inning(), 9));


function finalScore(inning, innNum){
  let home = 0;
  let away = 0;
  for (let i,j = 1; i,j <= innNum; i,j++){
    home = home + inning(i);
    away = away + inning(j);
    // console.log(`Home: ${home}`, `Away: ${away}`);
    // var randNum = inning(i);
    // home = home + randNum;
    // console.log(randNum);
    // console.log(`Home: ${home}`);
  }
  return [`Home: ${home}`, `Away: ${away}`];
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(inning, num) {
  let home = 0;
  let away = 0;
  for (let i,j = 1; i,j <= num; i,j++){
    home = home + inning(i);
    away = away + inning(j);
    // console.log(`Home: ${home}`, `Away: ${away}`);
    // var randNum = inning(i);
    // home = home + randNum;
    // console.log(randNum);
    console.log(`Inning #${j} Home: ${home}`, `Away: ${away}`);
  }
  return [`Final Score: ${home} - ${away}`];
}


console.log(scoreboard(inning, 9));