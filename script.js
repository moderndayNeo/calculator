const output = document.getElementById('output');
const deleteBtn = document.getElementById('delete');
const equals = document.getElementById('equals');

const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

/*
const displayWidth = document.getElementById('display').scrollWidth;
const outputWidth = output.scrollWidth;
// Output overflows if too many numbers are typed. Set a max length for the output string
// If string.length is greater than 20, throw an error or return
*/

// Screen output is a string, to be evaluated each time the user clicks 'equals'
// On clicking a button, the relevant value 'e.g. 1' is added to the string
// I have applied the class '.blackButtons' to buttons that ADD to the string. This is all buttons besides Clear, Delete and Equals.
const blackButtons = document.getElementsByClassName('blackButtons');

for (const value of blackButtons) {
    value.addEventListener('click', function() {
        if (output.innerHTML.length < 20) { //prevent display overflow
        output.innerHTML += this.innerHTML;
        } else { return; }
    });
}

// Click the 'C' (Clear) button, return to an empty screen
clear.addEventListener('click', function() {
    output.innerHTML = '';
});

// Click the DEL (Delete) button, remove the last typed character. Note: In the HTML document,
// I have put a space either side of the operators. To factor for this the delete button will
// remove the last 3 characters (space,operator,space) when an operator is used.
deleteBtn.addEventListener('click', function() {
    if ((/\s$/g).test(output.innerHTML)) {
        output.innerHTML = output.innerHTML.slice(0,-2);
    } output.innerHTML = output.innerHTML.slice(0,-1);
});


const multiplyRegex = /x/g;
//const divideRegex = /÷/g;
//const divideRegex = /&divide;/g;


function checkLastFourDigits(str) {
       return eval(str) === parseInt(eval(str)) ? eval(str) : (eval(str)).toFixed(4);
           // If the output is an integer, remove the unneccessary four zeros. Else,
           // return the floating point number to 4 decimal places.
   }

// Click the equals button, evaluate the string
equals.addEventListener('click', function() {
    output.innerHTML = output.innerHTML.replace(multiplyRegex, '*');
    output.innerHTML = checkLastFourDigits(output.innerHTML);
});


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
*/