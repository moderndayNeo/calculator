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
const deleteBtn = document.getElementById('delete');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const equals = document.getElementById('equals');

const output = document.getElementById('output');

// Screen output is a string, to be evaluated each time the user clicks 'equals'
// On clicking each button, the relevant value 'e.g. 1' is added to the string

one.addEventListener('click', function() {
   output.innerHTML += '1';
});

two.addEventListener('click', function() {
    output.innerHTML += '2';
});

three.addEventListener('click', function() {
    output.innerHTML += '3';
});

four.addEventListener('click', function() {
    output.innerHTML += '4';
});

five.addEventListener('click', function() {
    output.innerHTML += '5';
});

six.addEventListener('click', function() {
    output.innerHTML += '6';
});

seven.addEventListener('click', function() {
    output.innerHTML += '7';
});

eight.addEventListener('click', function() {
    output.innerHTML += '8';
});

nine.addEventListener('click', function() {
    output.innerHTML += '9';
});

zero.addEventListener('click', function() {
    output.innerHTML += '0';
});

decimal.addEventListener('click', function() {
    output.innerHTML += '.';
});


clear.addEventListener('click', function() {
    output.innerHTML = '';
});
// Return to empty string

/*  Remove LAST typed character
deleteBtn.addEventListener('click', function() {
    output.innerHTML += '2';
});
*/

multiply.addEventListener('click', function() {
    output.innerHTML += ' * ';
}); // Multiply

divide.addEventListener('click', function() {
    output.innerHTML += ' / ';
});

add.addEventListener('click', function() {
    output.innerHTML += ' + ';
});

subtract.addEventListener('click', function() {
    output.innerHTML += ' - ';
    console.log(output.innerHTML.length);
});

/*  Evaluate (eval) the string
equals.addEventListener('click', function() {
    output.innerHTML += '2';
});
*/

// Output overflows if too many numbers are typed. Set a max length for the output string
// If string.length is greater than 20, throw an error


function limitOutputLength() {
    if (output.innerHTML.length > 20) {
        output.innerHTML = 'Error';
    }
}

