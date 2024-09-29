let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

//---------parser part--------
/*
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = parseExpression(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function parseExpression(expression) {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    return Function(`'use strict'; return (${sanitizedExpression})`)();
}
*/
