function calculateFinalValue(inputArray) {

    //      --- Beginning: merge consecutive number strings ----
    // For example array is ['1','3','+','1','-','2','.','8']
    // passed to joinNumberValues(arr)
    // will yield mergedArray ['13','+','1','-','2.8']

    function countTheOperators(arr) {
        const opCount = arr.filter(x => OPERATOR_VALUES.includes(x)).length
        return opCount
    }

    const operatorCount = countTheOperators(inputArray)

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

    //      --- End: merge consecutive number values ---

    const mergedArray = joinNumberValues(inputArray)
    // console.log('mergedArray is: ' + mergedArray)

    // At this point I have a mergedArray in the format [numstring,op,numstring,op,numstring,op,...numstring]

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

    // iterate through mergedArray
    // check for operators. while operators exist in the array,
    // send the array to the calculate function, a switch statement
    // that takes two number strings and an operator. It returns a number string.
    // This number string is then spliced back into the mergedArray

    function isMoreThanOneValue(arr) {
        return arr.length > 1
    }

    function isMultiplyOrDivide(val) {
        return val === '*' || val === '/'
    }

    function isAddOrSubtract(val) {
        return val === '+' || val === '-'
    }

    function reduceToSingleValue(arr) {

        function sendNumbersEitherSideToCalculation(operator, operatorPosition) {
            const numberLeftOfOperator = arr[operatorPosition - 1]
            const numberRightOfOperator = arr[operatorPosition + 1]
            const calculatedPiece = calculate(numberLeftOfOperator, operator, numberRightOfOperator)
            const splicedArray = arr.splice(operatorPosition - 1, 3, calculatedPiece)

            return splicedArray
        }

        function processOperatorsInCorrectOrder(arr) {
            for (let i = 0; i < arr.length; i++) {
                const currentValue = arr[i]
                if (isMultiplyOrDivide(currentValue)) {
                    arr = sendNumbersEitherSideToCalculation(currentValue, i)
                }
                if (isAddOrSubtract(currentValue)) {
                    arr = sendNumbersEitherSideToCalculation(currentValue, i)
                }
            }
            return arr
        }

        while (isMoreThanOneValue(arr)) {
            processOperatorsInCorrectOrder(arr)
        }

        return arr
    }

    const arrayOfSingleValue = reduceToSingleValue(mergedArray)
    console.log(arrayOfSingleValue)

}


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
                    //     if (positionOfMultiply > positionOfDivide) {
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