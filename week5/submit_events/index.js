document.getElementById("submit").addEventListener("click", () => {
    const name1 = document.getElementById("name1").value, name2 = document.getElementById("name2").value;
    switch(document.getElementById("typeOfJoke").value) {
        case "happy":
            alert(`${name1} saw that ${name2} was so happy that he jumped over the moon!`);
        break;
        case "awesome":
            alert(`${name1} and ${name2} are so bright that even the sun needs glasses to look at them.`);
        break;
        case "cool":
            alert(`${name1} and ${name2} are so cool that they are cool.`);
        break;
    }
});