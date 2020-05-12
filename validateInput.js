function setDisplay(str) {
    output.innerHTML = str
}

function displayZero() {
    userInput = ['0']
    setDisplay('0')
}

function pushToUserInput(value) {
    userInput.push(value)
}


const getLastValue = (arr) => {
    if (!Array.isArray(arr)) return `Error: you passed ${arr}, of type: ${typeof arr}`
    if (arr.length === 0) return 'Error: you passed an empty array'

    return arr[arr.length - 1]
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

const isOperator = (val) => {
    const OPERATOR_VALUES = '+-/*'
    return OPERATOR_VALUES.includes(val)
}

const removeLastFromString = (str) => {
    if (typeof str !== 'string')
    return `Error: please pass a string value. You passed ${str} of type ${typeof str}`
  
    if (str.length === 0) return 'Error: string contains no values'

    return str.slice(0, -1)
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

const checkLastFourDigits = (str) => {
    if (typeof str !== 'string') return `Error: String required. You passed ${str} of type: ${typeof str}`
    if (!str.includes('.')) return 'Error: Value passed is not a floating value'

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

module.exports = { removeLastFromString, isOperator, getLastValue, checkLastFourDigits }


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
