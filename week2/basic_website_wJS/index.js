// Declaring variable for navbar, creating element.
var navbar = document.createElement("nav");

// Creating links to add to the navbar.
var navLinkOne = document.createElement("a");
navLinkOne.textContent = "Home";
navLinkOne.href = "#";
navbar.appendChild(navLinkOne);

var navLinkTwo = document.createElement("a");
navLinkTwo.textContent = "Contact";
navLinkTwo.href = "#";
navbar.appendChild(navLinkTwo);

var navLinkThree = document.createElement("a");
navLinkThree.textContent = "About";
navLinkThree.href = "#";
navbar.appendChild(navLinkThree);

// Add navbar to the website
document.body.appendChild(navbar);

// Welcome heading to the website, appending to body.
var heading = document.createElement("h1");
heading.textContent = "Welcome to my website!";
document.body.appendChild(heading);

// Paragraph telling about the website, adding to page.
var paragraph = document.createElement("p");
paragraph.textContent = "This website was built with only javascript!";
document.body.appendChild(paragraph);

// Declaring variable for unordered list, appending after the list items so that they are nested inside.
var unorderedList = document.createElement("ol");

// Delcaring variables for and appending list items to the unordered list.
var listItemOne = document.createElement("li");
listItemOne.textContent = "List Item One";
unorderedList.appendChild(listItemOne);

var listItemTwo = document.createElement("li");
listItemTwo.textContent = "List Item Two";
unorderedList.appendChild(listItemTwo);

var listItemThree = document.createElement("li");
listItemThree.textContent = "List Item Three";
unorderedList.appendChild(listItemThree);

//List is complete, adding it to the website.
document.body.appendChild(unorderedList);

// Add a footer with some text.
var footer = document.createElement("footer");
footer.textContent = "Footer Area";
document.body.appendChild(footer);