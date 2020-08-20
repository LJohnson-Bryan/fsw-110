function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// When the addition button is clicked.
document.getElementById("addButton").addEventListener("mousedown", function(){
    if(document.getElementById("additionNum1").value  || document.getElementById("additionNum2").value) {
        let addnumOne = parseInt(document.getElementById("additionNum1").value);
        let addnumTwo = parseInt(document.getElementById("additionNum2").value);
        document.getElementById("additionOutput").textContent = add(addnumOne, addnumTwo);
    } else {
        document.getElementById("additionOutput").textContent = 0;
    }
});

// When the subtraction button is clicked.
document.getElementById("subtractionButton").addEventListener("mousedown", function(){
    if(document.getElementById("subtractionNum1").value  || document.getElementById("subtractionNum2").value) {
        let subnumOne = parseInt(document.getElementById("subtractionNum1").value);
        let subnumTwo = parseInt(document.getElementById("subtractionNum2").value);
        document.getElementById("subtractionOutput").textContent = subtract(subnumOne, subnumTwo);
    } else {
        document.getElementById("subtractionOutput").textContent = 0;
    }
});

// When the multiply button is clicked.
document.getElementById("multiplyButton").addEventListener("mousedown", function(){
    if(document.getElementById("multiplyNum1").value  || document.getElementById("multiplyNum2").value) {
        let multiplynumOne = parseInt(document.getElementById("multiplyNum1").value);
        let multiplynumTwo = parseInt(document.getElementById("multiplyNum2").value);
        document.getElementById("multiplyOutput").textContent = multiply(multiplynumOne, multiplynumTwo);
    } else {
        document.getElementById("multiplyOutput").textContent = 0;
    }
});
