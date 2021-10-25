// Exercises: Conditionals

// What number's bigger?
// Write an if statement that compares two numbers(call them numOne and numTwo).
// If numOne is bigger, it should log to the console "numOne (THE VALUE) is bigger than numTwo (THE VALUE)".
// If numTwo is bigger, it should log to the console "numOne (THE VALUE) is smaller than numTwo (THE VALUE)".
// If they are even, it should log to the console "numOne (THE VALUE) is equal to numTwo (THE VALUE)".
// Bonus: Get the two numbers using prompt!
// Bonus: Use interpolation(you may need to look up template literals)

let numOne = parseInt(prompt("Enter a number"));
let numTwo = parseInt(prompt("Enter another number"));

//Using if, else if, else
if (numOne > numTwo) {
    console.log(`numOne ${numOne} is bigger than numTwo ${numTwo}`);
} else if (numOne < numTwo) {
    console.log(`numOne ${numOne} is smaller than numTwo ${numTwo}`);
} else {
    console.log(`numOne ${numOne} is equal to numTwo ${numTwo}`);
}

// Using ternary operator
let sum = (numOne > numTwo) ? console.log(`numOne ${numOne} is bigger than numTwo ${numTwo}`) 
    : (numOne < numTwo) ? console.log(`numOne ${numOne} is smaller than numTwo ${numTwo}`) 
    : console.log(`numOne ${numOne} is equal to numTwo ${numTwo}`);



// Driving Age
// Store the user's name and age.
// If the age is less than 16, log "Sorry, you can't drive yet!"
// If the age is greater than or equal to 16, log "Drive into the sunset!"
// Bonus: Get the name and age using prompt!
// Bonus: If the user can't drive yet, tell them how many years they have before they can drive (e.g. "Sorry, you still have 4 years before you can drive")

let person = prompt("What is your name?");
let age = parseInt(prompt("How old are you?"));
let legalAge = parseInt(prompt("Enter the legal driving age for your country"));

let drive = (age >= legalAge) ?console.log(`${person}, drive into the sunset!`)
    : console.log(`Sorry ${person}, you can't drive yet! You still have another ${legalAge - age} years before you can drive.`);


// Say Hi!
// Store a language(e.g. "English", "French" or "Malaysian")
// If the language is "English", log "Hi"
// If the language is "French", log "Bonjour"
// If the language is "Norwegian", log "Hallo"
// If the language is "Turkish", log "Merhaba"
// Plus, any other language you want to add!

let lang = prompt("Type one of the following languages: English, French, Norweigan, Turkish, Thai, Japanese or Indonesian");

let choice = (lang === "English") ? console.log(`You typed ${lang}, Hello!`)
    : (lang === "French") ? console.log(`You typed ${lang}, Bonjour!!`)
    : (lang === "Norwegian") ? console.log(`You typed ${lang}, Hallo!`)
    : (lang === "Turkish") ? console.log(`You typed ${lang}, Merhaba!`)
    : (lang === "Thai") ? console.log(`You typed ${lang}, S̄wạs̄dī!`)
    : (lang === "Japanese") ? console.log(`You typed ${lang}, Kon'nichiwa!`)
    : console.log(`You typed ${lang}, Halo!`);


// Southern or Northern Hemisphere ?
// Store a latitude(e.g. 65.3966675, -43.7251374)
// If the latitude is less than 0, log "Southern Hemisphere"
// If the latitude is greater than 0, log "Northern Hemisphere"
// Otherwise, log "On the equator"
// Bonus: Figure out if it is the Eastern or Western Hemisphere too!



let lat = parseFloat(prompt("Enter a latitude between -90 and 90?"));
let long = parseFloat(prompt("Enter a longitude between -180 and 180?"));

let latitude = (lat < 0) ? console.log(`Latitude ${lat} is in the southern hemisphere`)
    : (lat > 0) ? console.log(`Latitude ${lat} is in the northern hemisphere`)
    : console.log(`Latitude ${lat} is on the equator!`);

let longitude = (long < 0) ? console.log(`Longitude ${long} is in the western hemisphere`)
    : (long > 0) ? console.log(`Longitude ${long} is in the eastern hemisphere`)
    : console.log(`Longitude ${long} is on the prime meridian!`);

console.log(`See where in the world your chosen latitude and longitude is: https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`);


// Year in the 19th, 20th or 21st Century ?
// Store a year(e.g. 1905, 1814)
// If the year is between 1801 and 1900, log "19th Century"
// If the year is between 1901 and 2000, log "20th Century"
// If the year is between 2001 and 2100, log "21st Century"
// Otherwise, log "Sorry, it must be another century"

let year = parseInt(prompt("Enter a year, I'll identify whether it's in the 19th, 20th or 21st Century"));

let century = (year >= 1801 && year <= 1900) ? console.log(`${year} is in the 19th Century`)
    : (year >= 1901 && year <= 2000) ? console.log(`${year} is in the 20th Century`)
    : (year >= 2001 && year <= 2100) ? console.log(`${year} is in the 21st Century`)
    : console.log("Sorry, it must be another century");


// Greet
// Store an hour, as 24 hour time(e.g. 9, 16)
// If hour is less than 10, log "Good Morning"
// Else if the hour is less than 19, log "Good Day"
// Otherwise, log "Good Evening"

let hour = parseInt(prompt("Please enter an hour as a 24 hour time (e.g. 9, 16, 22 - commonly known as military time.)"))

let time = (hour >=0 && hour < 10) ? console.log(`It's ${hour}:00, good morning!`)
    : (hour >= 10 && hour < 19) ? console.log(`It's ${hour}:00, good day!`)
    : (hour >= 19 && hour < 24) ? console.log(`It's ${hour}:00, good evening!`)
    : console.log(`You entered ${hour}, which is not used in the military time scale. Try again!`);