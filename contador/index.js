const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const increment = document.querySelector(".increment");
const numberValue = document.getElementById("number");
var counter = 0;

function updateValue(x){
    counter += x;
    numberValue.textContent = counter;
};

decrement.addEventListener("click", function () {
    updateValue(-1);
});

increment.addEventListener("click", function() {
    updateValue(+1);
});

reset.addEventListener("click", function() {
    counter = 0;
    numberValue.textContent = counter;
});