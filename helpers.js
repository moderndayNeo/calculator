const OPERATOR_VALUES = '+-/*'
const NUMBERS_AND_DECIMAL = '0123456789.'

// helpers for calculateValue.js

function hasDecimal(str) {
    return str.includes('.')
}

function isMoreThanOneValue(arr) {
    return arr.length > 1
}

function isMultiplyOrDivide(val) {
    return val === '*' || val === '/'
}

function isAddOrSubtract(val) {
    return val === '+' || val === '-'
}

function isANumberOrDecimal(val) {
    return NUMBERS_AND_DECIMAL.includes(val)
}

function containsMulOrDiv(arr) {
    return arr.includes('*') || arr.includes('/')
}

function containsAddOrSub(arr) {
    return arr.includes('+') || arr.includes('-')
}


// helpers for validateInput.js

