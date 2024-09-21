function getNumbers() {
    const firstNumber = parseFloat(document.getElementById('first-number').value);
    const secondNumber = parseFloat(document.getElementById('second-number').value);
    return { firstNumber, secondNumber };
}

function displayResult(result) {
    const output = document.getElementById('output');
    output.innerHTML = result;

    if (result < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = 'white';
    }
}

function addition() {
    const { firstNumber, secondNumber } = getNumbers();
    displayResult(firstNumber + secondNumber);
}

function subtraction() {
    const { firstNumber, secondNumber } = getNumbers();
    displayResult(firstNumber - secondNumber);
}

function multiplication() {
    const { firstNumber, secondNumber } = getNumbers();
    displayResult(firstNumber * secondNumber);
}

function division() {
    const { firstNumber, secondNumber } = getNumbers();
    if (secondNumber !== 0) {
        displayResult(firstNumber / secondNumber);
    } else {
        displayResult('Error: Division by zero');
    }
}

function power() {
    const { firstNumber, secondNumber } = getNumbers();
    let result = 1;
    for (let i = 0; i < secondNumber; i++) {
        result *= firstNumber;
    }
    displayResult(result);
}

function clearCalc() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('output').innerHTML = '';
}
