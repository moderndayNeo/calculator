const output = document.getElementById('output')
const deleteBtn = document.getElementById('delete')
const equals = document.getElementById('equals')
const numbersAndDecimal = document.getElementsByClassName('numbersAndDecimal')
const operators = document.getElementsByClassName('operator')

defaultToZero()

for (const value of numbersAndDecimal) {
    value.addEventListener('click', collectInputAndDisplay)
}

for (const value of operators) {
    value.addEventListener('click', collectInputAndDisplay)
}

deleteBtn.addEventListener('click', removeLastTypedCharacter)

clear.addEventListener('click', function () {
    userInput = ['0']
    setDisplay('0')
})

equals.addEventListener('click', evaluateInputAndDisplay)

// Screen output is an array to be calculated when the user presses 'equals'
// On clicking a button, the button's value e.g. '1','7','+' is sent to the array
// I have applied classes 'numbersAndDecimal' and 'operators' to values that add to the array.
//  This is all buttons besides Clear, Delete and Equals.
