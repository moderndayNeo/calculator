const setDisplay = (str) => {
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
    if (!Array.isArray(arr))
        return `Error: you passed ${arr}, of type: ${typeof arr}`
    if (arr.length === 0) return 'Error: you passed an empty array'

    return arr[arr.length - 1]
}

const getIndexLastOperator = (arr) => {
    if (arr.some((value) => isOperator(value)) === false) return -1

    const lastPlus = arr.lastIndexOf('+')
    const lastMinus = arr.lastIndexOf('-')
    const lastMultiply = arr.lastIndexOf('*')
    const lastDivide = arr.lastIndexOf('/')
    const indexes = [lastPlus, lastDivide, lastMinus, lastMultiply]
    const sorted = indexes.sort()
    const indexLastOperator = sorted[3]

    return indexLastOperator
}

const isInputValid = (desiredValue) => {
    const lastValue = getLastValue(userInput)

    if (lastValue === '.') {
        if (desiredValue === '.') return false
        if (isOperator(desiredValue)) return false
    }

    if (desiredValue === '.' && userInput.includes('.')) {
        const indexLastDecimal = userInput.lastIndexOf('.')
        const indexLastOperator = getIndexLastOperator(userInput)
        if (indexLastDecimal > indexLastOperator) return false
    }

    if (!isOperator(lastValue)) {
        return true
    }

    if (isOperator(desiredValue)) {
        return false
    }

    return true
}

const isNumberString = (string) => {
    const numbers = '1234567890'
    return numbers.includes(string)
}

function collectInputAndDisplay(event) {
    const value = event.target.innerHTML

    if (userInput[0] !== '0' || userInput.length > 1) {
        if (isInputValid(value)) {
            pushToUserInput(value)
        }
    }

    if (userInput.length === 1 && userInput[0] === '0') {
        if (isNumberString(value)) {
            userInput[0] = value
        } else {
            pushToUserInput(value)
        }
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
    if (typeof str !== 'string')
        return `Error in checkLastFourDigits: String required. You passed ${str} of type: ${typeof str}`
    if (!str.includes('.')) return 'Error: Value passed is not a floating value'

    const decimalPosition = str.indexOf('.')
    const valuesAfterDecimal = str.substring(decimalPosition + 1)

    if (valuesAfterDecimal.length <= 4) {
        return str
    }
    return str.slice(0, decimalPosition + 5)
}

const shortenLongNumbers = (num) => {
    if (typeof num !== 'number')
        return `Error in shortenLongNumbers: Number type required. You passed ${num} of type: ${typeof num}`
    const str = num.toString()

    return !str.includes('.') ? str : checkLastFourDigits(str)
}

function evaluateInputAndDisplay() {
    const lastValue = userInput[userInput.length - 1]
    if (isOperator(lastValue) || lastValue === '.') return
    if (userInput[0] === '-') userInput.unshift('0')

    const rawCalculatedValue = calculateFinalValue(userInput)
    const shortenedCalculatedValue = shortenLongNumbers(rawCalculatedValue)
    userInput = shortenedCalculatedValue.split('')
    setDisplay(shortenedCalculatedValue)
}

module.exports = {
    removeLastFromString,
    isOperator,
    getLastValue,
    checkLastFourDigits,
    shortenLongNumbers,
    setDisplay,
    isInputValid,
    getIndexLastOperator,
    isNumberString,
}
