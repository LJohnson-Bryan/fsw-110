// Creating welcome heading, setting the text, and putting it on the website.
var headerElement = document.createElement("h1");
headerElement.textContent = "Welcome to my JS site";
document.body.appendChild(headerElement);

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