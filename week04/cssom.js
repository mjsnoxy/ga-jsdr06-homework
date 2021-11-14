// Visit Google's website in Chrome, and open up the console.
// Find the Google logo and store it in a variable using DOM traversal
let doodle = document.querySelector("img[src*='logo'");

// Save the current src attribute into a variable
let doodleSrc = doodle.getAttribute("src");

// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// You can use this url for the Yahoo Logo: https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg
//     Hint: You may need to figure out how to remove the srcset attribute for this!
doodle.srcset = "";
doodle.src = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg";

// Find the Google search button and store it in a variable.
let search = document.querySelector("input[value$='Google Search'");

// Modify the text of the button so that it says "Yahooo!" instead
search.value = "Yahooooooooo!!!!!" // Seems like this should work but doesn't?
