// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

let body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

// (In JS) Replace each of the spans(nickname, favorites, hometown) with your own information.

let allSpans = document.querySelectorAll("span");
allSpans[0].innerText = "Snoxy";
allSpans[1].innerText = "Correcting terrible American spelling of 'real' english grammar ;)";
allSpans[2].innerText = "Southend-on-Sea, Essex, UK";

// Iterate through each li and change the class to "list-item".Add a style tag that sets a rule for "list-item" to make the color "red".
let listItems = document.querySelectorAll("li");
for (i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "list-item");
    listItems[i].style.color="red";
}

// Create a new img element and set its src attribute to a picture of you.Append that element to the page.
let img = document.createElement("img");
img.src = "https://www.placecage.com/gif/200/300";
body.appendChild(img);