// Driving Age
// Write a function that receives a userAge called canDrive
// If the received age is less than 16, print "Sorry, you can't drive yet"
// If the received age is equal to or over 16, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how many years they will have to wait (e.g. "Sorry, you have 4 years to wait until you can drive")

function drivingAge(canDrive, legalDrive) {
    let age = parseInt(canDrive("How old are you?"));
    let legalAge = parseInt(legalDrive("Enter the legal driving age for your country"));

    (age >= legalAge) ? console.log("Drive away!")
        : console.log(`Sorry, you can't drive yet! You still have another ${legalAge - age} years before you can drive.`);
};

drivingAge(prompt, prompt);


// The World Translator
// Write a function called translator that receives a language(e.g. "fr", "eng" etc.).Log out the translated version(e.g.if the language is "eng" - log "Hello World", if the language is "fr" - log "Bonjour le monde" etc.)

function translator(language) {
    let lang = language("Type an abbreviated language: En, Fr, Nw, Tk, Th, Jp or Id");

    let choice = (lang === "en") ? console.log("Hello, world!")
        : (lang === "fr") ? console.log("Bonjour le monde!")
            : (lang === "nw") ? console.log("Hei Verden!")
                : (lang === "tk") ? console.log("Selam Dünya")
                    : (lang === "th") ? console.log("S̄wạs̄dī chāw lok")
                        : (lang === "jp") ? console.log("Kon'nichiwa sekai")
                            : (lang === "id") ? console.log("Halo Dunia!")
                                : console.log("Sorry, try again - I don't know the language you typed.");
};

translator(prompt);

// The Age Calculator
// Forgot how old you are ? Calculate it!
// Write a function named calculateAge that:
// Takes 2 arguments: birthYear, and currentYear.
// Calculates the 2 possible ages based on those years.
// Outputs the result: "You are either NN or NN"
// Call the function three times with different sets of values.
//     Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge (birthYear) { // Only passing one argument as dynamically getting the year.
    const fullDate = new Date();
    let currentYear = fullDate.getFullYear();
    let born = birthYear("What year were you born?");
    console.log(`You are either ${(currentYear - born) -1} or ${(currentYear - born)}`)
}

calculateAge(prompt); 

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is ? Wonder no more!
// Write a function named calculateSupply that:
// Takes 2 arguments: age, and amountPerDay.
// Calculates the amount consumed for rest of the life(based on a constant max age).
// Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amountPerDay, and round the result to a round number.

function calculateSupply(age, snackName, amountPerDay) {
    const maxAge = 83; // Average current life expectancy in Australia rounded up.
    let snack = snackName("What is your favourite snack?")
    let dailyConsumption = Math.round(amountPerDay(`How many ${snack} do you eat per day?`));
    let currentAge = parseInt(age("How old are you?"));
    let lifeSupply = (maxAge - currentAge) * (dailyConsumption * 365);
    console.log(`You will need ${lifeSupply} of ${snack} to last you until the ripe old age of ${maxAge}`);
}

calculateSupply(prompt, prompt, prompt);

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
 function calcCircumference(radius) {
     let circumference = (2 * radius) * Math.PI;
     console.log(`The circumference is ${circumference}`)
 }

 calcCircumference(parseInt(prompt("Enter the radius")));

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area}`);
}

calcArea(parseInt(prompt("Enter the radius")));

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit(celsius) {  
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`)
}
celsiusToFahrenheit(parseInt(prompt("Enter the celsius temperature")));

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C".

function fahrenheitToCelsius(fahrenheit) { 
    let celsius = (fahrenheit - 32) * (5/9);
    console.log(`${fahrenheit}°F is ${celsius}°C`)
 }
fahrenheitToCelsius(parseInt(prompt("Enter the fahrenheit temperature")));

// STILL TO DO!

// Exercises: Functions(very difficult)
// The following tasks are very, very difficult and not something we expect you to be able to do just yet.But if you are looking for an extra challenge and have a lot of time on your hands, have a go!

// Working with Users
// Starting with this data...

// const users = [
//     {
//         email: "groucho@ga.co",
//         password: "chicken",
//         isAdmin: true
//     },
//     {
//         email: "harpo@ga.co",
//         password: "elephant",
//         isAdmin: false
//     },
//     {
//         email: "gummo@ga.co",
//         password: "pinkFairyArmadillo",
//         isAdmin: true
//     },
//     {
//         email: "zeppo@ga.co",
//         password: "dumboOctopus",
//         isAdmin: false
//     }
// ];
// Create a function that receives an ID(index), an email and a password.If the function was provided with an email and a password that matches up, log "You are logged in".Otherwise, log "Sorry, something went wrong".

// Bonus: Working with Users
// Don't receive an ID! Find the user based on the email
// Make a function that creates an account.e.g.createAccount("chico@gmail.com", "redLippedBatfish", false);
// This should just add another object into the array
// Make a function that deletes an account.e.g.deleteAccount("zeppo@ga.co");
// This should just remove an object from the array
// Bonus: Make this only work if the correct password was provided as a parameter too
// Make a function that updates an account.e.g.updateAccount("harpo@ga.co", "password", "ayeAye");
// Bonus: Instead of receiving two strings to illustrate the change(like above), receive an object so you could potentially change multiple things at once.e.g.updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
// Bonus: Make this work only if the current password was also provided as a parameter.e.g.updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });
// Add a few extra users and make a search function. I'll let you decide on the interface or the function signature
// 

// Bonus: A Transit Application
// Start with this data...
// const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
// Create a function called travelFrom that receives a start station and an end station.

// Print the number of stops between the two stations. (e.g.log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
// Print out the names of the stations on separate lines(e.g.log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")
// Bonus: A(more complicated) Transit Application
// Make this work if you want to go backwards! e.g. 'You want to travel from "Redfern" to "St. James"'
// Make it error - tolerant.E.g.:
// Make it case -insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
// If someone passes in a station that doesn't exist, tell them
// Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like "Swap lines at ....."
// This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working
// Look at the hints below
// Hints
// You can receive the name of the line!(e.g.travelFrom("t2", "Circular Quay", "t3", "Canterbury"))
// Find the common station!(e.g. "t2" and "t3" both have "Central")
// Maybe drawing out the lines is a good approach!
// One of the easiest approaches to this is to treat a trip across lines as two separate trips
// An object with arrays stored under the name of the train lines might be a good way to approach it(e.g.const sydneyTrains = { t1: [], t2: [] };
// Note that if you want to use a variable to decide which line to access - dot notation won't work on an object! You'll have to think of another way(think square brackets!)
// Ask me questions about this if you want though!
// Work together as well - even if it is just in the planning stages