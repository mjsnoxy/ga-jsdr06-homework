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

nums.splice(3, 3); // Starting from index 3 remove three items from the array.

console.log(nums);


// Additional example to solidify learning.

let hitchhikers = ["Ford", "Arthur", "Zaphod", "Trillian", "Marvin"];

// Slice - Zaphod has two heads, so lets's 'slice' one off and make a new array by taking the element between index 2 and 3
let oneHead = hitchhikers.slice(2, 3); 
console.log(oneHead);


// Splice - Arthur needs to spend some time becoming a sandwich maker, but the crew are happy to replace him with a mouse. Start with the element at index 1, deleting 1, replace with "mouse"
hitchhikers.splice(1, 1, "Mouse"); 
console.log(hitchhikers);



// Bonus: Work with arrays of arrays
// Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// Access "inner array first item" and print it out

console.log(arrOfArrs[0][0]);

// Print "third" by using a dynamic index (hint: maybe indexOf or includes would help!)
let x = 0
let y = 0 
//Surely there's a better way to do this? Seems very verbose.
for (x; x <= arrOfArrs.length - 1; x++) {
  for (y; y <= arrOfArrs[x].length - 1; y++) {
    if (arrOfArrs[x][y].includes("third")) {
      console.log(arrOfArrs[x][y]);
    }
  }
}

// Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item
// If I declare x and y outside the loops this example only prints "third", yet declaring them inside the loop works. Frazzled brain doesn't understand why.
for (let x = 0; x <= arrOfArrs.length - 1; x++) {
    for (let y = 0; y <= arrOfArrs[x].length - 1; y++) {
        if (x != 0) {
            console.log(arrOfArrs[x][y]);
        }
    }
}


// Your top choices
// Create an array to hold your top five choices of something(dogs, books, presidents, whatever you want).

const bands = [
    "Smashing Pumpkins",
    "Foo Fighters",
    "Biffy Clyro",
    "Nirvana",
    "The Prodigy"
];

// // For each choice, log to the screen a string like: "My #1 choice is blue."
let x = 0
for (x; x <= bands.length -1; x++) {
    console.log(`My #${x + 1} choice is ${bands[x]}`);
}

// Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

const suf = [
    "st",
    "nd",
    "rd",
    "th",
    "th"
]

for (x; x <= bands.length - 1; x++) {
    console.log(`My #${x + 1}${suf[x]} choice is ${bands[x]}`);
}