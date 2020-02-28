function calculateFinalValue(inputArray) {
    // leftValue, operator, rightValue
    // code as follows:  if (operator === '*') { return leftValue * rightValue }...etc..
    // calculateValue will receive an array [num,op,num,op,...,num]
    // 
    // '.95*17
    // '3.5+-8'
    // '777/432'
    // '.634*-.289'
    // limit to four decimal places

    // const myArr = ['6', '-', '1', '3', '.', '2', '+', '5']
    // const arr2 = ['8', '5', '+', '1', '7', '.', '4', '/', '2', '.', '5', '*', '8', '7', '1', '5', '9']

    //      --- Beginning: merge Consecutives ----

    function countTheOperators(arr) {
        const opCount = arr.filter(x => OPERATOR_VALUES.includes(x)).length
        return opCount
    }

    const operatorCount = countTheOperators(inputArray)

    function mergeConsecutiveValues(arr) {
        for (let i = 0; i < arr.length; i++) {
            const currentValue = arr[i]
            const nextValue = arr[i + 1]
            function spliceConsecutives(arr) { return arr.splice(i, 2, currentValue + nextValue) }  // Concatenate consecutive number strings

            if (!isOperator(currentValue) && !isOperator(nextValue)) {
                arr = spliceConsecutives(arr)
            }
        }
    }

    function joinNumberValues(arr) {
        while (arr.length > ((2 * operatorCount) + 1)) { mergeConsecutiveValues(arr) }
        return arr
    }

    //      --- End: merge Consecutives


    const mergedArray = joinNumberValues(inputArray)

    console.log(mergedArray)

    // function checkArrayForOperator(val) {
    //     return isOperator(val)
    // }






}