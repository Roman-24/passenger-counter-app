let countElement = document.getElementById("count-el");
let count = 0;

function increment(){
    count += 1;
    countElement.textContent = count;
}

function decrement(){
    count -= 1;
    countElement.textContent = count;
}

let saveElement = document.getElementById("save-el");

function safe(){
    let countStr = count + " - ";
    saveElement.textContent += countStr;

    // po uložení sa counter znuluje
    countElement.textContent = 0;
    count = 0;
}