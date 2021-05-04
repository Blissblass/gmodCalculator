console.log("Testing! If you see this everythings okay!");

let ambienceButton = document.querySelector('#amb-btn');
let ambience = document.querySelector('#amb');
ambienceButton.addEventListener('click',play);

// Ambience settings
let temp = 0;
function play() {
    if(temp === 0) {
        temp = 1;
        ambience.play();
    }
    else if(temp === 1) {
        temp = 0;
        ambience.pause();
    }
}

let display = document.getElementById('display');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, op, b) {
    switch(op) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            if(b === 0){
                return "You can't divide by 0, silly!";
            }
            return divide(a,b);            
    }
}

let digitBtns = document.querySelectorAll('#digit');
digitBtns.forEach(btn => {
    btn.addEventListener('click',test);
});


function test(e) {
    display.textContent = e.target.textContent
}

