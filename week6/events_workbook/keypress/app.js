/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

let output = document.getElementById("output");

document.addEventListener("keypress", (e) => {
    output.textContent = `You've pressed the "${String.fromCharCode(e.keyCode).toUpperCase()}" key. It's key code is ${e.keyCode}`;
});
