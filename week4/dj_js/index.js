// Creating Square to do changes to. Moving it slightly off the top of the page, and centering it.
let square = document.createElement("div");
square.style.width = "250px";
square.style.height = "250px";
square.style.backgroundColor = "black";
square.style.margin = "200px auto";
document.body.append(square);

/*
The square's color will change as follows:

Blue when the mouse hovers over the square
Red when the mouse button is held down over the square
Yellow when the mouse button is let go over the square
Green when the mouse is double clicked in the square
Orange when the mouse scroll is used somewhere in the window (not just over the square).
You should also be able to press the first letter of the colors 
(typing "r" on the keyboard for "red", for example) and have the box change to that color
. Check this site for a full list of keyboard key codes (Links to an external site.).
*/

square.addEventListener("mouseenter", function(){
    changeColor(square, "blue");
});

square.addEventListener("mousedown", function(){
    changeColor(square, "red");
});

square.addEventListener("mouseup", function(){
    changeColor(square, "yellow");
});

square.addEventListener("dblclick", function(){
    changeColor(square, "green");
});

document.addEventListener("wheel", function(){
    changeColor(square, "orange");
});

document.addEventListener("keypress", findNewKeyColor);

function findNewKeyColor(event) {
    let key = event.which;
    switch(key) {
        case 98:
            changeColor(square, "blue");
        break;
        case 103:
            changeColor(square, "green");
        break;
        case 111:
            changeColor(square, "orange");
        break;
        case 121:
            changeColor(square, "yellow");
        break;
        case 114:
            changeColor(square, "red");
        break;
        default:
            changeColor(square, "black");
    }
}

function changeColor(itemToChange, color){
    itemToChange.style.backgroundColor = color;
}


