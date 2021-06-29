let countElement = document.getElementById("count-el");
let count = 0;

function increment(){
    count += 1;
    countElement.textContent = count;
}

function decrement(){
    
    if (count > 0){ // nemôžeme byť záporný počet cestujúcich 
        count -= 1;
        countElement.textContent = count;
    }
}

let saveElement = document.getElementById("save-el");

function safe(){
    let countStr = count + " - ";
    saveElement.textContent += countStr;

    // po uložení sa counter znuluje
    countElement.textContent = 0;
    count = 0;
}

function reset(){
    count = 0;
    countElement.textContent = 0;
    saveElement.textContent = "Previous entires: "
}