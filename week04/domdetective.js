// Visit General Assembly's website in Google Chrome, and open up the JavaScript console.
// You'll have to do this all in the JavaScript console, so keep track of what you have written!
// Using DOM access methods, such as document.querySelector and document.querySelectorAll, find the following parts of the page:

// The title of the page
document.querySelector("title");
// <title>Coding Bootcamps, Data Science, UX, Business | General Assembly</title>

// The logo in the nav
document.querySelector(".navi_banner_logo");
// <a class="navi_banner_logo" href="https://generalassemb.ly">General Assembly</a>

// The "Find Your Course" button in the nav
document.querySelector("[href$=findyourcourse]");
// a.navi_menu_item_link

// The heading that says "Learning Today, Leading Tomorrow"
document.querySelector("h1");
// <h1 data-reactid="17"><!-- react-text: 18 -->Learning Today,<!-- /react-text --><br class="md:hidden" data-reactid="19"><!-- react-text: 20 --> Leading Tomorrow<!-- /react-text --></h1>

// All the DOM nodes that contain course names(such as "Software Engineering", "UX Design Immersive" etc.)
document.querySelectorAll(".courses-grid_item");
// NodeList(6) [div.courses-grid_item, div.courses-grid_item, div.courses-grid_item, div.courses-grid_item, div.courses-grid_item, div.courses-grid_item]

// The amount of campuses around the world
document.querySelector("a[href*='locations'] div");
// <div class="facts_list_item_quantity" data-reactid="347">30+</div> */}

// The number of instructors
document.querySelector("a[href*='teach'] div");
// <div class="facts_list_item_quantity" data-reactid="355">20,000+</div>

// The logos of GA's featured clients and hiring partners
document.querySelector(".Employers__list___1cuG_");
// <div class="Employers__list___1cuG_" data-reactid="376"><div class="Employers__list_item_microsoft___2w9oG" data-reactid="377">Microsoft</div><div class="Employers__list_item_google___18kpO" data-reactid="378">Google</div><div class="Employers__list_item_conde_nast___oAAG4" data-reactid="379">Condé Nast</div><div class="Employers__list_item_visa___3sCE7" data-reactid="380">Visa</div><div class="Employers__list_item_loreal___16zEi" data-reactid="381">L’Oréal</div></div>

// GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
document.querySelectorAll("a[class*='social']");
// NodeList(5) [a.navi_footer-social-icons_facebook, a.navi_footer-social-icons_twitter, a.navi_footer-social-icons_linkedin, a.navi_footer-social-icons_instagram, a.navi_footer-social-icons_youtube]

// The input where you add your email to sign up for the newsletter(in the footer)
document.querySelector(".navi_footer-signup-email-input");
// <input type="email" name="prospect[email]" placeholder="Your email" class="navi_footer-signup-email-input">