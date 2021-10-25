// How would you:
// Convert a string into a number?

// Create a variable called "num" and set it to "4"
let num = "4";

// Update num by converting its value to the number it represents (e.g. "4" to 4)
num = parseInt(num);

// Log the value of num
console.log(num);

// Bonus: Do the same thing but with "5.6"

let float = "5.6";
float = parseFloat(float);
console.log(float);

// Convert a number into a string?
// Create a variable that contains 15
let str = 15;

// Update it, by converting the value to a string (e.g. 15 into "15")
str = str.toString();
console.log(str);

// Make a string uppercased?
// Create a variable that contains "hello"
let greeting = "hello";
// Using a method that is available on all strings, uppercase it! (e.g. "hello" into "HELLO")
greeting = greeting.toUpperCase();
// Log the result
console.log(greeting);

// Bonus: Make just the first character uppercased!
let capitalise = "hello";
capitalise = capitalise.charAt(0).toUpperCase() + capitalise.slice(1);
console.log(capitalise);

// Get the second character out of a string?
// Create a variable that contains "hello"
let char = "hello";
// Using a method, log out its second character(e.g. "e")
char = char.charAt(1);
console.log(char);

// Use concatenation to combine two strings(e.g.join "Hello " and "World") ?
// Create two variables, called firstName and lastName
let firstName = "Zaphod";
let lastName = "Beeblebrox";
// Create a new variable, called fullName, by combining those two strings!
let fullName = firstName + " " + lastName; 
// Log out fullName(and make sure there is a space between the first and last name!)
console.log(fullName);

// Bonus: Try using the prompt method to get the user's firstName and lastName - then combine them
let userFirst = prompt("What is your first name?");
let userLast = prompt("What is your last name?");
let userFull = userFirst + " " + userLast;
console.log(userFull);

// Get a number and square it (e.g. 4 squared is 16)?
// Create a variable that contains 16
let sq = 16;
// Using a method, square it and log out the result
console.log(sq = Math.pow(16, 2)); // MDN gave a good example of method > log in one line so including it

// Bonus: Do the same thing but cube it
let cube = 16;
console.log(cube = Math.pow(16, 3));


// Get the square root of a number (e.g. square root of 25 is 5)?
// Create a variable that contains 25
let square = 25;
// Using a method, square it and log out the result
console.log(square = Math.sqrt(square));
