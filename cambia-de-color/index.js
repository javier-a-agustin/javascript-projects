const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("button");
const texto = document.getElementById("color");

function getRandomValue(){
    return arr[Math.floor(Math.random() * 16)];
};

function getRandomColor(){
    let newColor = "#";
    for (let i = 0; i < 6; i++){
        newColor += getRandomValue();
    };
    return newColor;
};

button.addEventListener("click", function() {
    let myColor = getRandomColor();

    texto.textContent = myColor;

    document.body.style.background = myColor;

});




