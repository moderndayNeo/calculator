function countTheOperators(arr) {
    const opCount = arr.filter(x => OPERATOR_VALUES.includes(x)).length
    return opCount
}

function calculate(leftValue, operator, rightValue) {
    const leftNumber = parseFloat(leftValue)
    const rightNumber = parseFloat(rightValue)
    let calculatedNumber = 0

    switch (operator) {
        case '/':
            calculatedNumber = leftNumber / rightNumber;
            break;
        case '*':
            calculatedNumber = leftNumber * rightNumber;
            break;
        case '+':
            calculatedNumber = leftNumber + rightNumber;
            break;
        case '-':
            calculatedNumber = leftNumber - rightNumber;
            break;
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

const NUMBERS_AND_DECIMAL = '0123456789.'

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



function calculateFinalValue(inputArray) {

    const equation = mergeAnyConsecutiveNumbers(inputArray)

    const chunkToCalculate = equation.slice(0,3)
    const restOfEquation = equation.slice(3)

    const result = calculate(...chunkToCalculate)

    if (restOfEquation.length === 0) {
        return result
    }

    const toBeCalculated = [result, ...restOfEquation]

    return calculateFinalValue(toBeCalculated)
    
}







/*
 // iterate through mergedArray
    // check for operators. while operators exist in the array,
    // send the array to the calculate function, a switch statement
    // that takes two number strings and an operator. It returns a number string.
    // This number string is then spliced back into the mergedArray



//  while (arr.includes('/')) {
//         arr = sendNumbersEitherSideToCalculation('/')
//     }
//     while (arr.includes('*')) {
//         arr = sendNumbersEitherSideToCalculation('*')
//     }
//     while (arr.includes('+')) {
//         arr = sendNumbersEitherSideToCalculation('+')
//     }
//     while (arr.includes('-')) {
//         arr = sendNumbersEitherSideToCalculation('-')
//     }

//     function checkWhichAppearsEarlier()
    // if (positionOfMultiply > positionOfDivide) {
//         return 'multiplyAppearsEarlier'
//     } else { return 'divideAppearsEarlier' }
// }

// if (checkWhichAppearsEarlier() === 'multiplyAppearsEarlier')
//           arr = sendNumbersEitherSideToCalculation('/')
//             arr = sendNumbersEitherSideToCalculation('*')
//         }
//         while (arr.includes('+') || arr.includes('-')) {
//             arr = sendNumbersEitherSideToCalculation('+')
//             arr = sendNumbersEitherSideToCalculation('-')
//         }

//         return arr




//CAN TRIM THIS DOWN.

//     while (arr.includes('/')) {
//         if (arr.includes('*')) {

//             const positionOfMultiply = arr.indexOf('*')
//             const positionOfDivide = arr.indexOf('/')

//             if (positionOfMultiply < positionOfDivide) {
//                 arr = sendNumbersEitherSideToCalculation('*')
//             } else { arr = sendNumbersEitherSideToCalculation('/') }

//         } else { arr = sendNumbersEitherSideToCalculation('/') }
//     }

//     while (arr.includes('+')) {
//         if (arr.includes('-')) {

//             const positionOfPlus = arr.indexOf('+')
//             const positionOfMinus = arr.indexOf('-')

//             if (positionOfPlus < positionOfMinus) {
//                 arr = sendNumbersEitherSideToCalculation('+')
//             } else { arr = sendNumbersEitherSideToCalculation('-') }

//         } else { arr = sendNumbersEitherSideToCalculation('+') }
//     }
// }


function mergeConsecutiveValues(arr) {
for (let i = 0; i < arr.length; i++) {
const currentValue = arr[i]
const nextValue = arr[i + 1]
function spliceConsecutives(arr) {
return arr.splice(i, 2, currentValue + nextValue)
}  // Concatenate consecutive number strings

if (!isOperator(currentValue) && !isOperator(nextValue)) {
arr = spliceConsecutives(arr)
}
}
}

function joinNumberValues(arr) {
while (arr.length > ((2 * operatorCount) + 1)) {
mergeConsecutiveValues(arr)
}
return arr
}
const mergedArray = joinNumberValues(inputArray)

    // const operatorCount = countTheOperators(inputArray)

        //      --- Beginning: merge consecutive number strings ----
    // For example array is ['1','3','+','1','-','2','.','8']
    // passed to mergeAnyConsecutiveNumbers(arr)
    // will yield mergedArray ['13','+','1','-','2.8']
    //      --- End: merge consecutive number values ---
    // At this point I have a mergedArray in the format [numstring,op,numstring,op,numstring,op,...numstring]





    // function calculateFinalValue(inputArray) {

//         const mergedArray = mergeAnyConsecutiveNumbers(inputArray)
//         console.log(mergedArray)
    
//     function reduceToSingleValue(arr) {

//         function sendNumbersEitherSideToCalculation(operator, operatorPosition) {
//             const numberLeftOfOperator = arr[operatorPosition - 1]
//             const numberRightOfOperator = arr[operatorPosition + 1]
//             const calculatedPiece = calculate(numberLeftOfOperator, operator, numberRightOfOperator)


//             // const splicedArray = arr.splice(operatorPosition - 1, 3, calculatedPiece)
//             // return splicedArray
//         }

//         function processOperatorsInCorrectOrder(arr) {
//             for (let i = 0; i < arr.length; i++) {
//                 const currentValue = arr[i]
//                 if (isMultiplyOrDivide(currentValue)) {
//                     arr = sendNumbersEitherSideToCalculation(currentValue, i)
//                 }
//                 if (isAddOrSubtract(currentValue)) {
//                     arr = sendNumbersEitherSideToCalculation(currentValue, i)
//                 }
//             }
//             return arr
//         }

//         while (isMoreThanOneValue(arr)) {
//             processOperatorsInCorrectOrder(arr)
//         }

//         return arr
//     }
    
//         const arrayOfSingleValue = reduceToSingleValue(mergedArray)
//         console.log(arrayOfSingleValue)
//     }
*/