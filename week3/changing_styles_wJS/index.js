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
