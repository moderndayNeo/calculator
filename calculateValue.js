function calculateFinalValue(inputArray) {
    // operators are strings. leftValue and rightValue are numbers
    // code as follow:  if (operator === '*') { return leftValue * rightValue }...etc..
    // calculateValue will receive a string
    // string will look like 'numberoperatornumber'
    // '.95*17
    // '3.5+-8'
    // '777/432'
    // '.634*-.289'

    // limit to four decimal places

    const OPERATOR_VALUES = '+-*/'

    function isOperator(str) {
        return OPERATOR_VALUES.includes(str)
    }

    const myArr = ['6', '-', '1', '3', '.', '2', '+', '5']
    const arr2 = ['8', '5', '+', '1', '7', '.', '4', '/', '2', '.', '5', '*', '8', '7', '1', '5', '9']

    function countTheOperators(arr) {
        const opCount = arr.filter(x => OPERATOR_VALUES.includes(x)).length
        return opCount
    }

    const operatorCount = countTheOperators(myArr)

    function mergeConsecutiveValues(arr) {
        for (let i = 0; i < arr.length; i++) {
            const currentValue = arr[i]
            const nextValue = arr[i + 1]
            function spliceConsecutives(arr) { return arr.splice(i, 2, currentValue + nextValue) }

            if (!isOperator(currentValue) && !isOperator(nextValue)) {
                arr = spliceConsecutives(arr)
            }
        }
    }

    function joinNumberValues(arr) {
        while (arr.length > ((2 * operatorCount) + 1)) { mergeConsecutiveValues(arr) }
        return arr
    }

    // const arrayToBeCalculated = joinNumberValues(myArr)
    //  console.log(arrayToBeCalculated)
    // console.log(joinNumberValues(arr2))
    // console.log(6)


    // function checkArrayForOperator(val) {
    //     return isOperator(val)
    // }
}