const NUMBERS_AND_DECIMAL = '0123456789.'

function countTheOperators(arr) {
    const opCount = arr.filter((x) => OPERATOR_VALUES.includes(x)).length
    return opCount
}

function calculate(leftValue, operator, rightValue) {
    const leftNumber = parseFloat(leftValue)
    const rightNumber = parseFloat(rightValue)
    let calculatedNumber = 0

    switch (operator) {
        case '/':
            calculatedNumber = leftNumber / rightNumber
            break
        case '*':
            calculatedNumber = leftNumber * rightNumber
            break
        case '+':
            calculatedNumber = leftNumber + rightNumber
            break
        case '-':
            calculatedNumber = leftNumber - rightNumber
            break
    }

    return calculatedNumber.toString()
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

function mergeAnyConsecutiveNumbers(arr) {
    let holdingValue = ''
    const arrayWithNumbersConcatenated = []

    for (let i = 0; i < arr.length; i++) {
        const currentArrayValue = arr[i]

        if (isANumberOrDecimal(currentArrayValue)) {
            holdingValue += currentArrayValue
        } else {
            arrayWithNumbersConcatenated.push(holdingValue)
            arrayWithNumbersConcatenated.push(currentArrayValue)
            holdingValue = ''
        }
    }
    arrayWithNumbersConcatenated.push(holdingValue)

    return arrayWithNumbersConcatenated
}

function containsMulOrDiv(arr) {
    return arr.includes('*') || arr.includes('/')
}

function containsAddOrSub(arr) {
    return arr.includes('+') || arr.includes('-')
}

function processMultiplyAndDivide(equation) {
    if (!containsMulOrDiv(equation)) {
        return equation
    }

    const positionFirstMulOrDiv = equation.findIndex(isMultiplyOrDivide)
    const leftOfOperator = positionFirstMulOrDiv - 1
    const rightOfOperator = positionFirstMulOrDiv + 1

    const chunkToCalculate = equation.slice(leftOfOperator, rightOfOperator + 1)
    const result = calculate(...chunkToCalculate)
    const leftOfChunk = equation.slice(0, leftOfOperator)
    const rightOfChunk = equation.slice(rightOfOperator + 1, equation.length)

    const mulAndDivProcessed = [...leftOfChunk, result, ...rightOfChunk]

    return processMultiplyAndDivide(mulAndDivProcessed)
}

function processAddAndSubtract(equation) {
    if (!containsAddOrSub(equation)) {
        return equation
    }

    const positionFirstAddOrSub = equation.findIndex(isAddOrSubtract)
    const leftOfOperator = positionFirstAddOrSub - 1
    const rightOfOperator = positionFirstAddOrSub + 1

    const chunkToCalculate = equation.slice(leftOfOperator, rightOfOperator + 1)
    const result = calculate(...chunkToCalculate)
    const leftOfChunk = equation.slice(0, leftOfOperator)
    const rightOfChunk = equation.slice(rightOfOperator + 1, equation.length)

    const addAndSubtractProcessed = [...leftOfChunk, result, ...rightOfChunk]

    return processAddAndSubtract(addAndSubtractProcessed)
}

function calculateFinalValue(array) {
    const equation = mergeAnyConsecutiveNumbers(array)
    const mulsDivsProcessed = processMultiplyAndDivide(equation)
    const calculatedResult = processAddAndSubtract(mulsDivsProcessed)

    return calculatedResult
}
