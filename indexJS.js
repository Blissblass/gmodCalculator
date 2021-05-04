console.log("Testing! If you see this everythings okay!");

let display = document.getElementById('display');
let ambienceButton = document.querySelector('#icon');
let ambience = document.querySelector('#amb');
ambienceButton.addEventListener('click',play);
let clickSound = document.querySelector('#click');
let errorAudio = document.querySelector('#error');
let assignSound = document.querySelector('#assign');
let clearSound = document.querySelector('#clear');
let submitSound = document.querySelector('#submit-audio');
let output = '';
let op1 = '';
let op2 = '';
let currOpe = null;
let resDisplay = false;

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
    a = Number(a);
    b = Number(b);
    switch(op) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "÷":
            if(b === 0){
                return "You can't divide by 0, silly!";
            }
            return divide(a,b);            
    }
}

let digitBtns = document.querySelectorAll('#digit');
digitBtns.forEach(btn => {
    btn.addEventListener('click',displayNum);
});

function displayNum(e) {
    if(screen.textContent === '' || resDisplay) resetDisplay;
    clickSound.currentTime = 0;
    clickSound.play();
    display.textContent += e.target.textContent;
}

let operatorBtn = document.querySelectorAll('#op');
operatorBtn.forEach(btn => {
    btn.addEventListener('click', setOp);
});

function setOp(operator) {
    if(currOpe !== null) evaluate();
    assignSound.currentTime = 0;
    assignSound.play();
    op1 = display.textContent;
    currOpe = operator.target.textContent;
    resetDisplay();
}

let delBtn = document.querySelector('#del');
delBtn.addEventListener('click',clear);

function clear() {
    clearSound.currentTime = 0;
    clearSound.play();
    op1= '';
    op2= '',
    display.textContent = '';
}

function resetDisplay() {
    display.textContent = '';
    resDisplay = false;
}

let equalButton = document.querySelector('#submit');
equalButton.addEventListener('click',evaluate);

function evaluate() {
    if(currOpe === null || resDisplay) return;
    if(currOpe === "÷" && display.textContent === "0") {
        errorAudio.currentTime = 0;
        errorAudio.play();
        alert("You can't divide by 0,silly!");
        alert("You don't wanna blow up the universe now, do you?")
        clear();
        return;
    }
    submitSound.currentTime = 0;
    submitSound.play();
    op2 = display.textContent;
    display.textContent = roundOutput(operate(op1,currOpe,op2));
    currOpe = null;
}

function roundOutput(e) {
    return Math.round(e * 1000) / 1000;
}