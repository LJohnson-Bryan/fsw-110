/*
1. Create a new folder with an html, css, and js file (Hint: Make sure the html file is linked to the css and js file)
2. In the JS file, create a list of 5 H2 elements on the DOM using a for loop (Hint: this was covered in the previous assignment). Give them whatever text you would like.
3. Using the .style property, edit the element’s styles in your js to have:

Font-size: 
Font-weight: lighter
Font-family: sans-serif
Color: cornflowerblue


4. Go to your CSS file and create a class called .border that has:


2px solid black border,
5px padding
5px margin


5. Back in your JS, add that class to the elements being created using classList.
*/

var h2Elements = ["Hello World", "Developing is fun!", "Steve Jobs", "Bill Gates", "Amazing Codes"];
for(var i = 0; i < h2Elements.length; i++) {
    var newHeading = document.createElement("h2");
    newHeading.textContent = h2Elements[i];
    newHeading.style.fontSize = "20px";
    newHeading.style.fontWeight = "lighter";
    newHeading.style.fontFamily = "sans-serif";
    newHeading.style.color = "cornflowerblue";
    newHeading.classList.add("border");
    document.body.append(newHeading);
}
