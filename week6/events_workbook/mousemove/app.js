let redBox = document.querySelector(".red-box");

redBox.addEventListener("mousemove", (e) => {
    redBox.textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
});