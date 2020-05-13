const output = document.getElementById('output')
const deleteBtn = document.getElementById('delete')
const clear = document.getElementById('clear')
const equals = document.getElementById('equals')
const numbersAndDecimal = document.getElementsByClassName('numbersAndDecimal')
const operators = document.getElementsByClassName('operator')

displayZero()

for (const value of numbersAndDecimal) {
    value.addEventListener('click', collectInputAndDisplay)
}

for (const value of operators) {
    value.addEventListener('click', collectInputAndDisplay)
}

deleteBtn.addEventListener('click', removeLastTypedCharacter)

clear.addEventListener('click', displayZero)

equals.addEventListener('click', evaluateInputAndDisplay)
