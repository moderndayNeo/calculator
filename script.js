const output = document.getElementById('output');
const multiply = document.getElementById('multiply');
const deleteBtn = document.getElementById('delete');
const equals = document.getElementById('equals');

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
        if (output.innerHTML.length < 20) {
            //prevent display overflow
        output.innerHTML += this.innerHTML;
        } else { return; }
    });
}

/*
multiply.addEventListener('click', function() {
    output.innerHTML = output.innerHTML.slice(0,-3);
    output.innerHTML += ' * ';
});
*/

// Click the 'C' (Clear) button, return to an empty screen
clear.addEventListener('click', function() {
    output.innerHTML = '';
});

// Click the DEL (Delete) button, remove the last typed character
deleteBtn.addEventListener('click', function() {
   output.innerHTML = output.innerHTML.slice(0,-1);
});

// Click the equals button, evaluate the string
equals.addEventListener('click', function() {
    output.innerHTML = eval(output.innerHTML);
    // Regex evaluation. In the string swap out instances of 
    // ' x + for '*'
    // and instances of 'divideSign' for /
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
const divide = document.getElementById('divide');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
*/