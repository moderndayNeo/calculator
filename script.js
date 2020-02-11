const output = document.getElementById('output');
// Screen output is a string, to be evaluated each time the user clicks 'equals'
// On clicking each button, the relevant value 'e.g. 1' is added to the string
// I have applied the class '.blackButtons' to buttons that ADD to the string. This is all buttons besides Clear, Delete and Equals.
const blackButtons = document.getElementsByClassName('blackButtons');

for (const value of blackButtons) {
    value.addEventListener('click', function() {
        output.innerHTML += this.innerHTML;
    });
}


/*
function maximumStringLength() {
    
}
*/

/*
let maximumStringLength = output.innerHTML.maxLength;
maximumStringLength = 2;
console.log(maximumStringLength);
let maxSize = output.innerHTML.size;
maxSize = 2;
console.log(maxSize);

each button onclick, output += button's innerHTML

*/



clear.addEventListener('click', function() {
    output.innerHTML = '';
});
// Return to empty string

/*  Remove LAST typed character
deleteBtn.addEventListener('click', function() {
    output.innerHTML += '2';
});
*/

/*  Evaluate (eval) the string
equals.addEventListener('click', function() {
    output.innerHTML += '2';
});
*/

// Output overflows if too many numbers are typed. Set a max length for the output string
// If string.length is greater than 20, throw an error


// Declaring constants for all buttons
/*
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
const deleteBtn = document.getElementById('delete');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const equals = document.getElementById('equals');
*/