function setDisplay(str) {
    output.innerHTML = str
}

function pushToUserInput(value) {
    userInput.push(value)
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

const screenDisplaysZero = () => output.innerHTML === '0'

function collectInputAndDisplay(event) {
    const value = event.target.innerHTML

    if (screenDisplaysZero() && typeof parseInt(value) === 'number') {
        userInput[0] = value
    } else if (isInputValid(value)) {
        pushToUserInput(value)
    }

    const displayString = userInput.join('')
    setDisplay(displayString)
}

function removeLastFromString(str) {
    return str.slice(0, -1)
}

const displayZero = () => {
    userInput = ['0']
    setDisplay('0')
}

function removeLastTypedCharacter() {
    if (userInput.length === 1) {
        if (userInput === ['0']) {
            return
        } else {
            return displayZero()
        }
    }

    userInput.pop()
    const displayStringLessLastChar = userInput.join('')
    setDisplay(displayStringLessLastChar)
}

function checkLastFourDigits(str) {
    const decimalPosition = str.indexOf('.')
    const valuesAfterDecimal = str.substring(decimalPosition + 1)

    if (valuesAfterDecimal.length <= 4) {
        return str
    }
    return str.slice(0, decimalPosition + 5)
}

function shortenLongNumbers(num) {
    const str = num.toString()

    return !hasDecimal(str) ? str : checkLastFourDigits(str)
}

function evaluateInputAndDisplay() {
    console.log(`userInput is ${userInput}`)
    const rawCalculatedValue = calculateFinalValue(userInput)
    console.log(`rawCalculatedValue is ${rawCalculatedValue}`)
    const shortenedCalculatedValue = shortenLongNumbers(rawCalculatedValue)
    console.log(`shortenedCalculatedValue is ${shortenedCalculatedValue}`)
    userInput = shortenedCalculatedValue.split('')
    console.log(`userInput is ${userInput}`)
    setDisplay(shortenedCalculatedValue)
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

 Test -3.8-4 doesn't work.
 In mergeAnyConsecutiveNumbers

 Press operator then equals leads to NaN

*/