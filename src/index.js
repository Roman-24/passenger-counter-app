
let countElement = document.getElementById("count-el")



let count = 0;

function increment() {
    count += 1;
    countElement.innerText = count;
}