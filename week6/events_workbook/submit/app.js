// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

const form = document.getElementById("submit-me");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

document.getElementById("name").id = "first-name";
document.getElementById("first-name").name = "user_name";
document.getElementById("age").name = "user_age";