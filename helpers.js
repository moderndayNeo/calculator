// helpers for calculateValue.js

const hasDecimal = (str) => {
    if (typeof str !== 'string') return 'Please pass a string value'
    return str.includes('.')
}

const isMultiplyOrDivide = (val) => {
    return val === '*' || val === '/'
}

const isAddOrSubtract = (val) => {
    return val === '+' || val === '-'
}

const isANumberOrDecimal = (val) => {
    const NUMBERS_AND_DECIMAL = '0123456789.'
    return NUMBERS_AND_DECIMAL.includes(val)
}

module.exports = {
    hasDecimal,
    isMultiplyOrDivide,
    isAddOrSubtract,
    isANumberOrDecimal,
}

function containsMulOrDiv(arr) {
    return arr.includes('*') || arr.includes('/')
}

function containsAddOrSub(arr) {
    return arr.includes('+') || arr.includes('-')
}
