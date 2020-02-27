const output = document.getElementById('output');
const deleteBtn = document.getElementById('delete');
const equals = document.getElementById('equals');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

// Screen output is an array to be calculated when the user presses 'equals'
// On clicking a button, the button's value e.g. '1','7','+' is sent to the array
// I have applied the classes '.numbersAndDecimal' and '.operators' to values that add to the array.
//  This is all buttons besides Clear, Delete and Equals.
const numbersAndDecimal = document.getElementsByClassName('numbersAndDecimal');
const operators = document.getElementsByClassName('operator');

const OPERATOR_VALUES = '+-/*'
let userInput = [];

function convertArrayToString(arr) {
    let str = '';
    for (const item of arr) {
        str += item
    }
    return str
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
    // console.log('userInput after button press is: ' + userInput)
}


for (const value of numbersAndDecimal) {
    value.addEventListener('click', collectInputAndDisplay)
}

for (const value of operators) {
    value.addEventListener('click', collectInputAndDisplay)
}

function emptyTheString(str) {
    return str = ''
}

// Click the 'C' (Clear) button, return to an empty screen
clear.addEventListener('click', function () {
    userInput = []
    setDisplay('')
});

function removeLastFromString(str) {
    return str.slice(0, -1)
}

function removeLastTypedCharacter() {
    userInput.pop()
    const displayStringLessLastChar = convertArrayToString(userInput)
    setDisplay(displayStringLessLastChar)
}

deleteBtn.addEventListener('click', removeLastTypedCharacter)


function checkLastFourDigits(num) {
    return num === parseInt(num) ? num : num.toFixed(4);
}

function performEvaluation(valueToEvaluate) {
    return eval(valueToEvaluate);
}

function buildArrayFromStringCharacters(stringValue) {
    return stringValue.split('')
}

function evaluateInputAndDisplay() {
    const stringToBeCalculated = convertArrayToString(userInput)
    const rawCalculatedValue = performEvaluation(stringToBeCalculated);

    const shortenedCalculatedValue = checkLastFourDigits(rawCalculatedValue);
    setDisplay(shortenedCalculatedValue);

    const calculatedValueToString = shortenedCalculatedValue.toString()
    userInput = buildArrayFromStringCharacters(calculatedValueToString)
    console.log(userInput)
}

// Click the equals button, evaluate the string
equals.addEventListener('click', evaluateInputAndDisplay)


    /*
    // Declaring constants for all buttons
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const zero = document.getElementById('zero');
    const decimal = document.getElementById('decimal');
    
    const clear = document.getElementById('clear');
    const add = document.getElementById('add');
    const subtract = document.getElementById('subtract');
    
    // const userInput = [];

    
    // const multiplyRegex = /x/g;
    // output.innerHTML = output.innerHTML.replace(multiplyRegex, '*');
    //const divideRegex = /÷/g;
    //const divideRegex = /&divide;/g;
    
    if str ends in one or more zeros, remove the zeros
    return /0+$/g.test(str) ? str.replace(0, '') : str.toFixed(4);
    
    function checkLastFourDigits(str) {
           return eval(str) === parseInt(eval(str)) ? eval(str) : (eval(str)).toFixed(4);
               // If the output is an integer, remove the unneccessary four zeros. Else,
               // return the floating point number to 4 decimal places.
       }
       function checkLastFourDigits(num) {
       // If str ends in one or more zeros, remove the zeros.
        return /0+$/g.test(num) ? num.replace(0, '') : num.toFixed(4);
    }
    
    const displayWidth = document.getElementById('display').scrollWidth;
    const outputWidth = output.scrollWidth;
    output.innerHTML.width < display.length
    // Output overflows if too many numbers are typed. Set a max length for the output string
    // If string.length is greater than 20, throw an error or return
         //   if (output.innerHTML.length < 15) { //Prevent display overflow. Substitute this for a proper width value
          //  } return;
    
          //const checkForoperators = /[+-/*]\s$/g; // Check if the last value entered was an operators
    //const checkForMultiplyOrDivide = /\*|\//g;  // Check if the value entered is 'multiply' or 'divide'
    
    function emptyTheArray(arr) {
        while (arr.length > 0) {
            arr.pop()
        }
    }
    
    Default state for the screen : displayZero.
    displayZero is displayed when the user first loads the calculator, and when the user
    clicks Clear.

    function stripWhitespace(str) {
    return str.trim()

    */