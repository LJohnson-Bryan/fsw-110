document.flyForm.addEventListener("submit", () => {
    const firstname = document.flyForm.firstName.value, lastName = document.flyForm.lastName.value, age = document.flyForm.age.value, gender= document.flyForm.gender.value, placeToFly = document.flyForm.placeToFly.value;  
    let dietary = [];
   
    if (document.flyForm.kosher.checked) {
        dietary.push(document.flyForm.kosher.value);
    }
    if (document.flyForm.vegetarian.checked) {
        dietary.push(document.flyForm.vegetarian.value);
    }
    if (document.flyForm.lactoseFree.checked) {
        dietary.push(document.flyForm.lactoseFree.value);
    }
    if (document.flyForm.vegan.checked) {
        dietary.push(document.flyForm.vegan.value);
    }

    const dietRestrictions = dietary.join(", ");
   
    alert(`First Name: ${firstname}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nLocation: ${placeToFly}\nDietary Restrictions: ${dietRestrictions}`);
});
