const OPERATOR_VALUES = '+-/*'
const NUMBERS_AND_DECIMAL = '0123456789.'

// helpers for calculateValue.js


const hasDecimal = (str) => {
    if (typeof str !== 'string') return 'Please pass a string value'
    return str.includes('.')
}

const isMultiplyOrDivide = (val) => {
    return val === '*' || val === '/'
}

module.exports = { hasDecimal, isMultiplyOrDivide }

// const functions = {
//     hasDecimal: (str) => {
//         return str.includes('.') ? true : false
//     },
// }

// module.exports = functions




function isMoreThanOneValue(arr) {
    return arr.length > 1
}

// function isMultiplyOrDivide(val) {
//     return val === '*' || val === '/'
// }

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
