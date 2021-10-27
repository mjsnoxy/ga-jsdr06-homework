// Exercises: Loops

// Log every number from 0 to 10

let i = 0;

for (i; i <= 10; i ++) {
    console.log(i);
}

// Log every number from 4 to -16

let x = 4;

for (x; x >= -16; x --) {
    console.log(x);
}


// Log every fourth number from 8 to 41

let y = 8

for (y; y <= 41; y ++) {
    if (y % 4 === 0) {
        console.log(y);
    }
}

// The Classic Fizzbuzz Program
// Loop from 0 to 100.
// If the number is evenly divisible by 3, log the number and "Fizz"
// If the number is evenly divisible by 5, log the number and "buzz"
// If the number is evenly divisible by both 3 AND 5, log the number and "Fizzbuzz"

let z = 1; // If you start at 0 it logs Fizzbuzz as the remainder of dividing 0 by 15 is 0

for (z; z <=100; z ++) {
    if (z % 15 === 0) {
        console.log ( z + " " + "FizzBuzz");
    } else if (z % 3 === 0) {
        console.log(z + " " + "Fizz");
    } else if (z % 5 === 0) {
        console.log(z + " " + "Buzz");
    } else {
        console.log(z);
    }
}