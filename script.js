let currentInput = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';
let isOperatorClicked = false;

function appendNumber(number) {
    if (isOperatorClicked) {
        secondNumber += number;
        updateDisplay(secondNumber);
    } else {
        firstNumber += number;
        updateDisplay(firstNumber);
    }
}

function appendOperator(op) {
    if (op === '+/-') {
        if (isOperatorClicked) {
            secondNumber = String(-Number(secondNumber));
            updateDisplay(secondNumber);
        } else {
            firstNumber = String(-Number(firstNumber));
            updateDisplay(firstNumber);
        }
    } else {
        operator = op;
        isOperatorClicked = true;
    }
}

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    isOperatorClicked = false;
    updateDisplay('0');
}

function calculate() {
    let result = 0;
    if (operator === '+') {
        result = Number(firstNumber) + Number(secondNumber);
    } else if (operator === '-') {
        result = Number(firstNumber) - Number(secondNumber);
    }

    updateDisplay(result);
    addHistory(firstNumber, operator, secondNumber, result);
    clearValues();
}

function updateDisplay(value) {
    document.getElementById('result').textContent = value;
}

function addHistory(first, operator, second, result) {
    const historyTable = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
    const newRow = historyTable.insertRow();
    newRow.innerHTML = `<td>${first}</td><td>${operator}</td><td>${second}</td><td>${result}</td>`;
}

function clearValues() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    isOperatorClicked = false;
}
