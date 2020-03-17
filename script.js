const output = document.getElementById('output');
const deleteBtn = document.getElementById('delete');
const equals = document.getElementById('equals');
const numbersAndDecimal = document.getElementsByClassName('numbersAndDecimal');
const operators = document.getElementsByClassName('operator');
const OPERATOR_VALUES = '+-/*'
let userInput = [];

for (const value of numbersAndDecimal) {
    value.addEventListener('click', collectInputAndDisplay)
}

for (const value of operators) {
    value.addEventListener('click', collectInputAndDisplay)
}

deleteBtn.addEventListener('click', removeLastTypedCharacter)
clear.addEventListener('click', function () {
    userInput = []
    setDisplay('')
});
equals.addEventListener('click', evaluateInputAndDisplay)

// Screen output is an array to be calculated when the user presses 'equals'
// On clicking a button, the button's value e.g. '1','7','+' is sent to the array
// I have applied classes 'numbersAndDecimal' and 'operators' to values that add to the array.
//  This is all buttons besides Clear, Delete and Equals.

function convertArrayToString(arr) {
    return arr.join('')
}

function setDisplay(str) {
    output.innerHTML = str
}

function pushToUserInput(value) {
    userInput.push(value);
}

function isOperator(val) {
    return OPERATOR_VALUES.includes(val)
}

function getLastValue(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined
}

function isInputValid(desiredValue) {
    const lastValue = getLastValue(userInput)
    
    if (lastValue === '.' && desiredValue === '.') {
        return false
    }

    if (!isOperator(lastValue)) {
        return true
    }

    if (isOperator(desiredValue)) {
        return false
    }

    return true
}

function collectInputAndDisplay(event) {
    const value = event.target.innerHTML
    if (isInputValid(value)) {
        pushToUserInput(value)
    }
    const displayString = convertArrayToString(userInput)
    setDisplay(displayString)
}

function removeLastFromString(str) {
    return str.slice(0, -1)
}

function removeLastTypedCharacter() {
    userInput.pop()
    const displayStringLessLastChar = convertArrayToString(userInput)
    setDisplay(displayStringLessLastChar)
}

function checkLastFourDigits(str) {
    const decimalPosition = str.indexOf('.')
    const valuesAfterDecimal = str.substring(decimalPosition + 1)
    
    if(valuesAfterDecimal.length <= 4) {
        return str
    } return str.slice(0, decimalPosition + 5)
}

function hasDecimal(str) {
    return str.includes('.')
}

function shortenLongNumbers(num) {
    const str = num.toString()

    return !hasDecimal(str) ?
        str :
        checkLastFourDigits(str)
}

function evaluateInputAndDisplay() {
    console.log(`userInput is ${userInput}`)
    const rawCalculatedValue = calculateFinalValue(userInput)
    console.log(`rawCalculatedValue is ${rawCalculatedValue}`)
    const shortenedCalculatedValue = shortenLongNumbers(rawCalculatedValue);
    console.log(`shortenedCalculatedValue is ${shortenedCalculatedValue}`)
    userInput = shortenedCalculatedValue.split('')
    console.log(`userInput is ${userInput}`)
    setDisplay(shortenedCalculatedValue);
}

/*
Default state for the screen : displayZero.
displayZero is displayed when the user first loads the calculator,
and when the user clicks Clear.

Set userInput as ['0']. If user presses an operator, then append to the string
If user presses a decimal, append to string
If user presses a number, then remove the zero and append the number

User presses a number between 1-9?
    Remove 0, append number to string :
    append value ()
*/