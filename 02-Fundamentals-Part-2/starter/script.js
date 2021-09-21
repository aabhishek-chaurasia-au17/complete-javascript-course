// Jai shri ram

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK �


const calcTip = (bill) => tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(250));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; 
console.log(total);

// LECTURE: Introduction to Arrays

// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

let populations = ['India', 'china', 'Bangladesh', 'Japan'];

if (populations.length === 4) {
    console.log(true);
}else{
    console.log(false); 
}

const percentageOfWorld1 = (population) =>  (population / 7900) * 100

const percentages = [percentageOfWorld1(130), percentageOfWorld1(52), percentageOfWorld1(140)]

console.log(percentages);


// LECTURE: Basic Array Operations (Methods)

// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

let neighbours = ['purtgal', 'india', 'china'];

neighbours.push('Utopia')
neighbours.pop()

if(!neighbours.includes('Germany')){
    console.log(`Probably not a central European country :D`);
}

neighbours[0] = 'india';
neighbours[1] = 'USA';
neighbours[2] = 'Utopia';
console.log(neighbours);
console.log(neighbours.indexOf('USA'));
neighbours.push('Sweden');
neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden'
console.log(neighbours);


// LECTURE: Introduction to Objects

// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

let myCountry = {
    country : 'India',
    capital : 'Delhi',
    language : 'Hindi',
    population : 133,
    neighbours :['Pakistan', 'Bangladesh', 'China', 'Japan'],
    discription : function(params) {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}` 
    }
}
console.log(myCountry);


// const knowAbout = prompt('what do u want to know about country, capital, language, population, neighbours');

// if(myCountry[knowAbout]){
//     console.log(myCountry[knowAbout]);
// }else{
//     console.log('you give a wrong input');
// }

myCountry.states = 36;
console.log(myCountry);

console.log(`india Has A ${myCountry.neighbours.length} Neighbours ${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}, ${myCountry.neighbours[2]}, ${myCountry.neighbours[3]}`);


// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation

myCountry.population = 133 + 2;
myCountry['population'] = 136 - 2;
console.log(myCountry.discription());

let Punitn = {
    Nameis : 'Punit',
    job : 'Webdesiger',
    expirians : '4-year',
    Location: 'Delhi',
    PhNumber: 1234567890,
    bioData : function () {
        let about = `${this.Nameis} is a good ${this.job}. he have ${this.expirians}. he is living in ${this.Location} his Phone number is ${this.PhNumber}.`
        return about
    }
}

console.log(Punitn.bioData());

// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

let BMIsm = {
    Name : 'Mark Miller',
    Mass :78,
    Height : 1.69,
    calcBMI : function() {
       let BMI = this.Mass / this.Height ** 2;
       return `Name is ${this.Name} Mass is ${this.Mass} Height is ${this.Height} Total BMI is ${BMI}`
    }
}

console.log(BMIsm.calcBMI());

let BMIsj = {
    Name : 'John Smith',
    Mass : 93,
    Height : 1.95,
    calcBMI : function() {
       let BMI = this.Mass / this.Height ** 2;
       return `Name is ${this.Name} Mass is ${this.Mass} Height is ${this.Height} Total BMI is ${BMI}`
    }
}

console.log(BMIsj.calcBMI());

console.log(BMIsm.calcBMI(), BMIsj.calcBMI());

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting.

for(let i = 1; i <= 50; i++){
    console.log(`Voter number ${i} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is


let popula = [150, 132, 456, 75]
const percentages2 = [];

for(let i = 0; i < popula.length; i++){
    const perc = percentageOfWorld1(popula[i])
    percentages2.push(perc)
}

console.log(percentages2);

const myfriends = [ 'Krishna', 'Shiva', 'Hanuman', 'rishu', 'roopam'];

for(let i = 0; i < myfriends.length; i++){
    console.log(myfriends[i]);
}

for(let i = myfriends.length -1; i >= 0; i--){
    console.log(myfriends[i]);
}

// Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK


const mybills = [122, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const mytips = [];
const mytotals = [];
for(let i = 0; i < mybills.length; i++){
    mytips.push(calcTip(mybills[i]))
    let res = mytips[i] + mybills[i]
    mytotals.push(res)
}

console.log(`mybills is ${mybills}`);
console.log(`mytips is ${mytips}`);
console.log(`mytotals is ${mytotals}`);

function calcAverage(totalAvg) {
    sum = 0 
    for(let i = 0; i < totalAvg.length; i++){
        sum += totalAvg[i] / totalAvg.length
    }
    return sum
}
console.log(calcAverage(mytotals));
