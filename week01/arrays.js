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

// Create a copy of rainbowColors using an array method and call it twoColors.Essentially pull two colors out of the array(say, between the index of 1 and 3)
let twoColours = rainbowColors.slice(1, 3)
console.log(twoColours);

// Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice(whichever one is appropriate).Note: This will have to be done with multiple method calls
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

// Additional examples

let hitchhikers = ["Ford", "Arthur", "Zaphod", "Trillian", "Marvin"];

// Slice - let's get rid of Marvin as he's depressing. He can start a new array of his own and try to find friends.
let lostRobot = hitchhikers.slice(4); // Removes 4th item from the array by index and creates a new array with it.
console.log(lostRobot);

// Splice - Arthur needs to spend some time becoming a sandwich maker, but the crew are happy to replace him with a mouse.
hitchhikers.splice(1, 1, "Mouse"); // Delete 1 item from the index position of 1 and insert "Mouse".
console.log(hitchhikers);



// Bonus: Work with arrays of arrays
// Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// Access "inner array first item" and print it out

// Print "third" by using a dynamic index

// Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item

// Your top choices
// Create an array to hold your top five choices of something(dogs, books, presidents, whatever you want).

// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.