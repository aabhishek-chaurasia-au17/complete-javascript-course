/* LECTURE: Values and Variables */
let country = 'india';
let continent = 'Asia';
let population = 1378.6;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types

console.log(typeof country);
console.log(typeof population);
let isIsland = false;
console.log(typeof isIsland);
let language;
console.log(language);

// LECTURE: let, const and var

language = 'hindi';

const birthYear = 1994;
console.log(birthYear);

const lastname = 'chaurasia'
console.log(lastname);

let fName = 'Abhishek Chaurasia';
fName = 'subham chauasia'
console.log(fName);

// LECTURE: Basic Operators

let half = population / 2;
console.log(++half);
const finland = 6000000;
console.log(population >  finland);
const aveg_population = 3300000;
console.log(population > aveg_population);



// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 

let markMass = 78;
let markHeight = 1.69;
let johnMass = 95;
let johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI =  markBMI > johnBMI

console.log(johnBMI, markBMI, markHigherBMI);

// LECTURE: Strings and Template Literals
// Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

let description = 'Portugal is in Europe, and its 11 million people speak portuguese'
description = `Portugal is in Europe, and its 11 million 
people speak portuguese`
console.log(description);


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 

if(markBMI > johnBMI){
    console.log(`NICE`);
}else{
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
}

// LECTURE: Taking Decisions: if / else Statements

if(1700000 > 3300000){
    console.log(`Portugal's population is above average`);
}else{
    console.log(`Portugal's population is 22 million below average`);
}

// LECTURE: Type Conversion and Coercion

// 1. Predict the result of these 5 operations without executing them:
console.log('9' - '5');               // 4
console.log('19' - '13' + '17');      // 617
console.log('19' - '13' + 17);        // 23
console.log('123' < 57);              // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
// 2. Execute the operations to check if you were right

// LECTURE: Equality Operators: == vs. ===

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

// if( numNeighbours === 1){
//     console.log('Only 1 border!');
// }else if( numNeighbours > 1){
//     console.log('More than 1 border');
// }else{
//     console.log('no border');
// }

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK

let Dolphins = (96 + 108 + 89) / 3;
let Koalas = (88 + 91 + 110) / 3  

if(Dolphins === Koalas){
    console.log('Match is draw');
}else if (Dolphins > Koalas) {
    console.log('Dolphins win the game');
}else if (Koalas > Dolphins){
    console.log('Koalas win the game');
}else{
    console.log(none);
}


// Bonus 1

let Dolphins1 = (97 + 112 + 101) / 3;
let Koalas1 = (109 + 85 + 123) / 3;

console.log(Dolphins1, Koalas1);

if(Dolphins1 > Koalas1 && Dolphins1 >= 100){
    console.log('Dolphins1 win the game');
}else if(Koalas1 > Dolphins1 && Koalas1 >= 100){
    console.log('Koalas1 win the game');
}else{
    console.log('No budy wins the game');
}

// The switch Statement

let mylanguages = 'english'

switch(mylanguages){
    case 'hindi':
        console.log('Number 1 Desi Boli');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'arabic':
        console.log('4th most spoken language');
        break;
    default:
        console.log('none');
}

const day = 'thursday';

if( day === 'monday'){
    console.log('satrt coding');
}else if(day === 'tuseday'){
    console.log('do coding');
}else if(day == 'wednesday' || 'thursday'){
    console.log('write code full day');
}else if(day === 'friday'){
    console.log('keep coding 1');
}else if(day == 'saturday' || 'sunday'){
    console.log('enjoy your day');
}else{
    console.log('Not a valid day');
}


// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK �

let bill = 275;
let tip;
console.log(tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 );
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

// JavaScript Fundamentals – Part 2

// Note: Please start Part 2 from scratch and comment out all the code from Part 1.
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console


const describeCountry = (country, population, capitalCity) =>{
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

console.log(describeCountry('India', 133, 'Delhi'));
console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('America', 10, 'New York'));

// LECTURE: Function Declarations vs. Expressions

// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

const percentageOfWorld1 = (population) => {
    return (population / 7900) * 100
}

const percentageOfWorld2 = function( population ){
    return (population / 7900) * 100
}

let china = percentageOfWorld1(1441);
let india = percentageOfWorld1(1311);
let Japan = percentageOfWorld1(54)
console.log(china, india, Japan);
console.log(percentageOfWorld2(1441));


// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice


function describePopulation(country, population){
    let presentage = percentageOfWorld1(population)
    let description = `${country} has ${population} million people, which is about ${presentage} of the world.`
    console.log(description); 
}

describePopulation('china', 1441);
describePopulation('India', 133);
describePopulation('Bangaladesh', 74);

// Age Calculetor
const calcAge = birthYear => 2021 - birthYear

const retirementAge = function(birthYear, names){
    let age = calcAge(birthYear)
    let retirement = 65 - age
    console.log( retirement, names);
}

retirementAge(1994, 'abhishek')


// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Data 1:
let Dolphinss = calcAverage(85, 54, 41);
let Koalass = calcAverage(23, 34, 27);

const checkWinner = (avgDolhins, avgKoalas) => {
    if(avgDolhins >= 2*avgKoalas){
        console.log(`Dolphins wins`);
    }else if (avgKoalas >= 2*avgDolhins) {
        console.log(`avgKoalas wins`);
    }else{
        console.log(`No budy wins the game`);
    }
}   

checkWinner(Dolphinss,Koalass)

