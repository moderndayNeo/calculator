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

// Screen output is a string, to be evaluated each time the user clicks 'equals'
// On clicking each button, the relevant value 'e.g. 1' is added to the string

one.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '1';
});

two.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '2';
});

three.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '3';
});

four.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '4';
});

five.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '5';
});

six.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '6';
});

seven.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '7';
});

eight.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '8';
});

nine.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '9';
});

zero.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '0';
});

decimal.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '.';
});



clear.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '';
});
// Return to empty string

/*  Remove LAST typed character
delete.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '2';
});
*/

multiply.addEventListener('click', function() {
    document.getElementById('output').innerHTML += ' * ';
}); // Multiply

divide.addEventListener('click', function() {
    document.getElementById('output').innerHTML += ' / ';
});

add.addEventListener('click', function() {
    document.getElementById('output').innerHTML += ' + ';
});

subtract.addEventListener('click', function() {
    document.getElementById('output').innerHTML += ' - ';
});

/*  Evaluate (eval) the string
equals.addEventListener('click', function() {
    document.getElementById('output').innerHTML += '2';
});
*/




