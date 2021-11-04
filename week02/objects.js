// The Reading List
// Keep track of which books you have read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title(a string), author(a string), and alreadyRead(a boolean indicating if you have read it yet).

let readingList = [
    {title: "Mort", author: "Terry Pratchett", alreadyRead: true},
    {title: "The Lord of the Rings", author: "JRR Tolkien", alreadyRead: true},
    {title: "Ready Player One", author: "Ernest Cline", alreadyRead: true},
    {title: "Emma", author: "Jane Austen", alreadyRead: false},
    {title: "Henry V", author: "William Shakespeare", alreadyRead: false},
    {title: "Trainspotting", author: "Irvine Welsh", alreadyRead: true}
];

// Iterate through that array of books
// For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".

for (let i = 0; i < readingList.length; i++) {
    let book = readingList[i];
    console.log(`"${book.title}", by ${book.author}`);
}

// Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
// If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"

for (let i = 0; i < readingList.length; i++) {
    let book = readingList[i];
    if (book.alreadyRead === true) {
        console.log(`You have already read "${book.title}", by ${book.author}`);
    } else {
        console.log(`You still need to read "${book.title}", by ${book.author }`);
    }
}

// The Recipe Card
// Never forget another recipe!
// Create an object to hold information on your favorite recipe.It should have properties for a title(a string), a number of servings(call it numOfServings), and ingredients(an array of strings).
recipe = {
    title: "Chilli & Garlic Loligo Squid",
    numOfServings: 4,
    ingredients: [
        "4-6 loligo squid",
        "3 cloves garlic",
        "1-3 teaspoons of chilli flakes (depending on heat tolerance!)",
        "5 springs of rosemary",
        "Olive oil",
        "Crusty bread to serve"
    ]
};

// On separate lines log the recipe information so it looks like this:
// Ginger, Apple and Banana Smoothie
// Serves: 2
// Ingredients:
// - 500ml Milk
//     - 2 / 3 cups of vanilla protein powder
//         - 2 tbs rolled oats
//             - Pinch of cinnamon
//                 - 2 cups of baby spinach leaves
//                     - 2 frozen bananas
//                         - 2 roughly chopped apples
//                             - 1 / 2 avocado
//                                 - 2 tsp fresh ginger
//                                     - 6 ice cubes
// Note: That is actually a very nice smoothie
console.log(recipe.title);
console.log(`Serves: ${recipe.numOfServings}`);
console.log("Ingredients:")
for (i = 0; i < recipe.ingredients.length; i++) {
    console.log (` - ${recipe.ingredients[i]}`)
}

// The Movie Database
// It's like IMDB, but much much smaller!
// Create an object to store the following information about your favorite movie: title(a string), duration(a number), director(a string) and stars(an array of strings).


// Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."


// Maybe the join method will be helpful?