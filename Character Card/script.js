const nameIn = document.getElementById("nameIn");
const disName = document.getElementById("disName");
const colorIn = document.getElementById("colorIn");
const card = document.getElementById("card");
const borderIn = document.getElementById("borderIn");
const ageIn = document.getElementById("ageIn");
const disAge = document.getElementById("disAge");
const birthIn = document.getElementById("birthIn");
const disBirh = document.getElementById("disBirth");
const classIn = document.getElementsByName("class");
const disClass = document.getElementById("disCLass");
const fColor = document.getElementById("fColor");


function updateName() {
    disName.textContent = nameIn.value;
}
nameIn.oninput = updateName;
function updateColor(){
    const pickedColor = colorIn.value;
    card.style.backgroundColor = pickedColor;
}
colorIn.oninput = updateColor;
function updateBorder(){
    const changeBorder = borderIn.value;
    card.style.borderRadius  = changeBorder + "px";
}
borderIn.oninput = updateBorder;

function updateAge(){
    disAge.textContent = ageIn.value;
}
ageIn.oninput = updateAge;

function updateBirth(){
    disAge.textContent = ageIn.value;
}
ageIn.oninput = updateBirth;

function updateClass(){
    for(let radio of classIn){
        if(radio.checked){
            disClass.textContent = radio.value;
        }
    }
}
classIn.forEach(function(radio){
    radio.oninput = updateClass
})

function updateFont(){
    const changeColor = fColor.value;
    card.style.color = changeColor;
}
fColor.oninput = updateFont;