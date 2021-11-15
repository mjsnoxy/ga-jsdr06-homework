const books = [
    {
        title: "Guards! Guards!",
        author: "Terry Pratchett",
        alreadyRead: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/1/17/Guards-Guards-cover.jpg",
    },
    {
        title: "The Lord of the Rings",
        author: "JRR Tolkien",
        alreadyRead: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    },
    {
        title: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        alreadyRead: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/e/ed/Bill_bryson_a_short_history.jpg",
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        alreadyRead: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg",
    },
    {
        title: "Shantaram",
        author: "Gregory David Roberts",
        alreadyRead: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/b/b9/GDR_Shantaram.jpg",
    },
];

// Iterate through the array of books.For each book, create a p element with the book title and author and append it to the page.
// If you have read it, make the text color green.If you haven't, make the text color red.
// Bonus: Use a ul and li to display the books.

let body = document.querySelector("body");
let unorderedList = document.createElement("ul");
body.appendChild(unorderedList);

for (i = 0; i < books.length; i++) {
    let bookList = document.createElement("li");
    bookList.innerHTML = (`${books[i].title} by ${books[i].author}`);
    if (books[i].alreadyRead === true) {
        bookList.style.color = "green";
    } else {
        bookList.style.color = "red";
    }
    unorderedList.appendChild(bookList);

    // Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page
    // This works but the formatting is 1990s awful!
    let image = document.createElement("img");
    image.src = books[i].cover;
    bookList.appendChild(image); 
}


