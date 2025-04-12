
// 1. Create variables to store your name, age, and nationality.
// Combine them into a sentence that introduces you.

let name = "Olayenikan Michael";
let age = 25;
let nationality = "Nigerian";

let introduction = "Hi, my name is " + name + ", I'm " + age + " years old and I'm " + nationality + ".";
console.log(introduction);


// 2. Favorite quote or lyric in uppercase and lowercase.

let quote = "The only limit to our realization of tomorrow is our doubts of today.";

let upperQuote = quote.toUpperCase();
let lowerQuote = quote.toLowerCase();

console.log("Uppercase: " + upperQuote);
console.log("Lowercase: " + lowerQuote);


// 3. Take a word and reverse it.

let word = "developer";
let reversedWord = word.split('').reverse().join('');
console.log("Reversed word: " + reversedWord);


// 4. Store prices and calculate total.

let price1 = 150;
let price2 = 299;
let price3 = 99;

let total = price1 + price2 + price3;
console.log("The total price of all items is ₦" + total);


// 5. Average of 5 test scores.

let test1 = 85;
let test2 = 90;
let test3 = 78;
let test4 = 92;
let test5 = 88;

let average = (test1 + test2 + test3 + test4 + test5) / 5;
console.log("The average test score is: " + average);


// 6. Array of favorite foods.

let favoriteFoods = ["Pizza", "Jollof Rice", "Burger", "Pounded Yam", "Sushi"];

console.log("First favorite food: " + favoriteFoods[0]);
console.log("Last favorite food: " + favoriteFoods[favoriteFoods.length - 1]);


// 7. Add new foods at beginning and end.

favoriteFoods.unshift("Fried Chicken"); // Add at beginning
favoriteFoods.push("Ice Cream"); // Add at end

console.log("Updated favorite foods list: " + favoriteFoods);


// 8, 9, 10. Create three arrays: jssOne, jssTwo, jssThree.

let jssOne = ["John", "Amaka", "Lekan"];
let jssTwo = ["Sade", "Emeka", "Bola"];
let jssThree = ["Tobi", "Grace", "Ibrahim"];

console.log("JSS One: " + jssOne);
console.log("JSS Two: " + jssTwo);
console.log("JSS Three: " + jssThree);
