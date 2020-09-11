const toggler = document.getElementById("toggleButton");
document.cardTask.style.display = "none";
toggler.addEventListener("click", () => {
    toggler.textContent == "Add a New Task" ? toggler.textContent = "Hide Inputs" : toggler.textContent = "Add a New Task";
    if(toggler.textContent == "Add a New Task") {
        document.cardTask.style.display = "none";
    } else {
        document.cardTask.style.display = "initial";
    }
});

document.addEventListener("click", (e) => {
   if(e.target.textContent === "Delete" && e.target.tagName === "A") {
       e.target.parentNode.parentNode.remove();
   }
});

document.cardTask.addEventListener("submit", (e) => {
    // alert(`Inputs:\n${document.cardTask.title.value}\n${document.cardTask.description.value}`);
    e.preventDefault();
    document.cardTask.style.display = "none";
    toggler.textContent = "Add a New Task";
    const newCard = document.createElement("div");
    newCard.className = "card";
    const heading = document.createElement("h3");
    heading.textContent = document.cardTask.title.value;
    heading.className = "tc";
    const seperator = document.createElement("hr");
    seperator.width = "60px";
    const description = document.createElement("p");
    description.textContent = document.cardTask.description.value;
    description.className = "tc";
    const deleter = document.createElement("p");
    deleter.className = "tc";
    const deleteButton = document.createElement("a");
    deleteButton.style.display = "block";
    deleteButton.textContent = "Delete";
    deleteButton.href = "#";
    deleter.appendChild(deleteButton);
    newCard.appendChild(heading);
    newCard.appendChild(seperator);
    newCard.appendChild(description);
    newCard.appendChild(deleter);
    document.getElementById("container").appendChild(newCard);
    document.cardTask.title.value = null;
    document.cardTask.description.value = null;
});
