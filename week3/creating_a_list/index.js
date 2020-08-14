/*
Step 2: Commented out for step 3 with repeated Hello World.

var newHeading = document.createElement("h1");
newHeading.textContent = "Hello World";
document.body.append(newHeading);
*/

// Steps 3 + 4 -- running for loop to show "Hello World" 10 times. Adding style for step #4.
for(var i = 0; i < 10; i++) {
    var newHeading = document.createElement("h1");
    newHeading.textContent = "Hello World";
    newHeading.setAttribute("style", "background-color: red; color: white;");
    document.body.append(newHeading);
}


const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for(var i = 0; i < names.length; i++) {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = names[i];
    document.body.append(newParagraph);
}
