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

const containsMulOrDiv = (arr) => {
    if (arr.some(value => typeof value !== 'string')) return 'Array contains some non-string values'

    return arr.includes('*') || arr.includes('/')
}


            module.exports = {
                hasDecimal,
                isMultiplyOrDivide,
                isAddOrSubtract,
                isANumberOrDecimal,
                containsMulOrDiv
            }

function containsAddOrSub(arr) {
    return arr.includes('+') || arr.includes('-')
}
