// Working with Arrays
// Create an empty array, and call it rainbowColors.

let rainbowColors = [];

// Using Array methods:
// Add "orange" to the end of the array
rainbowColors.push("orange");
// console.log(rainbowColors);

// Add "red" to the start of the array
rainbowColors.unshift("red");
// console.log(rainbowColors);

// Add "yellow" to the end
rainbowColors.push("yellow");
// console.log(rainbowColors);

// Add "green", "blue", "indigo", and "violet" to the end of the array
// Bonus: Do this using one method call
rainbowColors.push("green", "blue", "indigo", "violet");

// Log out the length of the array
console.log(rainbowColors.length);

// Log out the second item
console.log(rainbowColors[1]);

// Log out the last item(make this flexible / dynamic!)
let lastitem = rainbowColors[rainbowColors.length - 1];
console.log(lastitem);

// Log out the index of the string "blue"
console.log(rainbowColors.indexOf("blue"));

// Bonus: Find out the difference between.slice and.splice
// From https://javascript.info/array-methods: The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
// slice returns a new array copying to it all items from index start to end (not including end)
// Examples:

let hitchhikers = ["Ford", "Arthur", "Zaphod", "Trillian", "Marvin"];

// Slice - let's get rid of Marvin as he's depressing.
let lostRobot = hitchhikers.slice(4);
console.log(lostRobot);

// Splice - 

// Create a copy of rainbowColors using an array method and call it twoColors.Essentially pull two colors out of the array(say, between the index of 1 and 3)


// Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice(whichever one is appropriate).Note: This will have to be done with multiple method calls




// Bonus: Work with arrays of arrays
// Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// Access "inner array first item" and print it out

// Print "third" by using a dynamic index

// Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item

// Your top choices
// Create an array to hold your top five choices of something(dogs, books, presidents, whatever you want).

// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.