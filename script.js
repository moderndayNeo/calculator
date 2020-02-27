const output = document.getElementById('output');
const deleteBtn = document.getElementById('delete');
const equals = document.getElementById('equals');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

// Screen output is a string, to be sent to a calculation function when the user presses 'equals'
// On clicking a button, the button value e.g. '1','7','+' is added to the string
// I have applied the classes '.numbersAndDecimal' and '.operators' to values that add to the string.
//  This is all buttons besides Clear, Delete and Equals.
const numbersAndDecimal = document.getElementsByClassName('numbersAndDecimal');
const operators = document.getElementsByClassName('operator');

//const checkForoperators = /[+-/*]\s$/g; // Check if the last value entered was an operators
//const checkForMultiplyOrDivide = /\*|\//g;  // Check if the value entered is 'multiply' or 'divide'

const OPERATOR_VALUES = '+-/*'
// const userInput = [];
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

function stripWhitespace(str) {
    return str.trim()
}

function collectInputAndDisplay(event) {
    const value = stripWhitespace(event.target.innerHTML)
    if (isInputValid(value)) {
        pushToUserInput(value)
    }
    const displayString = convertArrayToString(userInput)
    setDisplay(displayString)
    console.log('userInput after button press is: ' + userInput)
}


for (const value of numbersAndDecimal) {
    value.addEventListener('click', collectInputAndDisplay)
}

for (const value of operators) {
    value.addEventListener('click', collectInputAndDisplay)
}


function emptyTheArray(arr) {
    while (arr.length > 0) {
        arr.pop()
    }
}

function emptyTheString(str) {
    return str = ''
}

// Click the 'C' (Clear) button, return to an empty screen
clear.addEventListener('click', function () {
    // emptyTheArray(userInput)
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


/* breakdown the back-end inputs into leftValue, operator, rightValue.
My default state for the screen is named displayZero.
displayZero is displayed when the user first loads the calculator, and when the user
clicks Clear.
Screen begins at displayZero.

1) User begins by typing out a number - The number is a string
Then user types an a) operator, b) decimal
console.log(userInput)

1a) User follows the number with an operator
Two things happen:
1. the zero is removed, the screen output is a string, and shows what's been typed
2. The digits typed so far (number string) gets converted from a string to a number,
and assigned to leftValue

The user has pressed a number and an operator already. User can now press number,decimal,operator
If user now presses a number:   the operator is assigned to operator, previous operator
gets knocked off the old string.
If user presses another operator:   new operator is assigned to operator (unless
    the new operator is a minus, in which case previous operator is assigned to operator, minus becomes
    the beginning of rightValue).

If user presses a decimal (so far we've had number, operator, decimal),decimal
becomes the beginning of rightValue.
After decimal user can press number, operator, or decimal.
If user presses a number, it continues to concatenate to rightValue
If user presses an operator, return
If user presses another decimal, return

2) User begins by typing an operator
a) If at displayZero the user types an operator, zero is assigned to leftValue,
operator is assigned to operator.
User can then type a number, operator or decimal.
If user types a number, it becomes the beginning of rightValue
If user types an operator, it is assigned to operator (unless it is a minus, in which case
    it becomes the beginning of rightValue)

If user types a decimal (so far zero, operator, decimal), it becomes beginning of leftValue.
If user follows with a number, it becomes rightValue
If user tries to follow with an operator or decimal, return.

3) User begins by typing a decimal. It becomes part of the string for leftValue.
User then types a number, operator or decimal.
a) User types a number, it continues to concatenate to string
    User has now typed a decimal and a number. User can now type an operator or a decimal.
    If user types an operator, continue to concatenate to string
    If user types a decimal, return

b) User types an operator, return
c) User types a decimal, return

Now we have leftValue, operator, rightValue.
What if user keeps typing: leftValue,operator,rightValue,operator,anotherValue
Do BODMAS calculations (multiplication, subtraction first)
Run a regex, search for * or /
If found, do a calculation around the numbers either side
(6 * (8) * 4) How to handle this problem?
Iterate through the calculation multiple times, searching for a * or /
For each time I find one, insert brackets and calculate

Adding parentheses functionality
Search for parentheses. If they exist, make the calculation within the brackets
*/


function checkLastFourDigits(num) {
    return num === parseInt(num) ? num : num.toFixed(4);
}

function performEvaluation(valueToEvaluate) {
    return eval(valueToEvaluate);
}

function buildArrayFromStringCharacters(stringValue) {
    let calculatedArray = []
    for (let i = 0; i < stringValue.length; i++) {
        calculatedArray.push(stringValue[i])
        //  console.log('calculatedArray during loop is: ' + calculatedArray)
    }
    return calculatedArray
}

function evaluateInputAndDisplay() {
    // const value = stripWhitespace(output.innerHTML)
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

    // on click equals, reset userInput to the calculated value.
    //   calculateFinalValue(leftValue, operator, rightValue)



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

*/