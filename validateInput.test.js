const {
    removeLastFromString,
    isOperator,
    getLastValue,
    checkLastFourDigits,
    shortenLongNumbers,
    setDisplay,
    isInputValid
} = require('./validateInput')

describe('tests for removeLastFromString', () => {
    test('removeLastFromString exists', () => {
        expect(removeLastFromString).toBeDefined()
    })
    test('returns a string with the last character removed', () => {
        expect(removeLastFromString('string')).toBe('strin')
        expect(removeLastFromString('example')).toBe('exampl')
    })
    test('returns a message if the string is empty', () => {
        expect(removeLastFromString('')).toBe(
            'Error: string contains no values'
        )
    })
    test('returns a message if a non-string value is passed', () => {
        expect(removeLastFromString(6)).toBe(
            'Error: please pass a string value. You passed 6 of type number'
        )
        expect(removeLastFromString([])).toBe(
            'Error: please pass a string value. You passed  of type object'
        )
    })
})

describe('tests for getLastValue', () => {
    test('getLastValue exists', () => {
        expect(getLastValue).toBeDefined()
    })
    test('returns the last value in an array', () => {
        expect(getLastValue(['1', '2', '3'])).toBe('3')
        expect(getLastValue(['1', '2', '5'])).toBe('5')
        expect(getLastValue(['1', '2', '6'])).toBe('6')
    })
    test('returns a message if the array is empty', () => {
        expect(getLastValue([])).toBe('Error: you passed an empty array')
    })
    test('returns a message if a non-array type is passed', () => {
        expect(getLastValue('string')).toBe(
            'Error: you passed string, of type: string'
        )
        expect(getLastValue(5)).toBe('Error: you passed 5, of type: number')
    })
})

describe('tests for checkLastFourDigits', () => {
    test('checkLastFourDigits exists', () => {
        expect(checkLastFourDigits).toBeDefined()
    })
    test('returns a number string trimmed to max. 4 decimal places', () => {
        expect(checkLastFourDigits('1234.56789')).toBe('1234.5678')
        expect(checkLastFourDigits('-1234.56789')).toBe('-1234.5678')
        expect(checkLastFourDigits('9876.54321')).toBe('9876.5432')
        expect(checkLastFourDigits('-9876.543212345')).toBe('-9876.5432')
    })
    test("returns a message if it doesn't receive a string value", () => {
        expect(checkLastFourDigits(6)).toBe(
            'Error in checkLastFourDigits: String required. You passed 6 of type: number'
        )
        expect(checkLastFourDigits(1234.5678)).toBe(
            'Error in checkLastFourDigits: String required. You passed 1234.5678 of type: number'
        )
    })
    test('returns the number string unmodified if fewer than 4 decimal places', () => {
        expect(checkLastFourDigits('123.456')).toBe('123.456')
        expect(checkLastFourDigits('123456.78')).toBe('123456.78')
    })
    test('returns a message if value passed is not a floating value', () => {
        expect(checkLastFourDigits('123456')).toBe(
            'Error: Value passed is not a floating value'
        )
    })
})

describe('tests for shortenLongNumbers', () => {
    test('shortenLongNumbers exists', () => {
        expect(shortenLongNumbers).toBeDefined()
    })
    test('returns a message if value passed is not type number', () => {
        expect(shortenLongNumbers('string')).toBe(
            'Error in shortenLongNumbers: Number type required. You passed string of type: string'
        )
        expect(shortenLongNumbers('5')).toBe(
            'Error in shortenLongNumbers: Number type required. You passed 5 of type: string'
        )
    })
    test('returns a string type when passed a number', () => {
        const result = shortenLongNumbers(12345)
        const result2 = shortenLongNumbers(1234.5678)
        expect(typeof result).toBe('string')
        expect(typeof result2).toBe('string')
    })
    test('shortens numbers greater than 4 decimal places', () => {
        expect(shortenLongNumbers(1234.56789)).toBe('1234.5678')
        expect(shortenLongNumbers(-1234.56789)).toBe('-1234.5678')
        expect(shortenLongNumbers(9876.54321)).toBe('9876.5432')
        expect(shortenLongNumbers(-9876.543212345)).toBe('-9876.5432')
    })
    test('returns the same number as a string if fewer than 4 decimal places', () => {
        expect(shortenLongNumbers(123.456)).toBe('123.456')
        expect(shortenLongNumbers(123456.78)).toBe('123456.78')
    })
})

describe('tests for setDisplay', () => {
    test('setDisplay exists', () => {
        expect(setDisplay).toBeDefined()
    })
})

describe('tests for isInputValid', () => {
    test('isInputValid exists', () => {
        expect(isInputValid).toBeDefined()
    })
    test('returns true if last value is a number and value passed is an operator', () => {
        userInput = ['1']
        expect(isInputValid('+')).toBe(true)
    })
    test('returns true if a number follows a number', () => {
        userInput = ['1']
        expect(isInputValid('2')).toBe(true)
    })
    test('returns false if last value is an operator and value passed is an operator', () => {
        userInput = ['*']
        expect(isInputValid('/')).toBe(false)
        expect(isInputValid('+')).toBe(false)
        expect(isInputValid('-')).toBe(false)
        userInput = ['1', '/', '*']
        expect(isInputValid('-')).toBe(false)        
        expect(isInputValid('+')).toBe(false)        
        expect(isInputValid('*')).toBe(false)        
    })
    test('returns false if user enters two decimals', () => {
        userInput = ['.']
        expect(isInputValid('.')).toBe(false)
    })
    test('returns false if an operator follows a decimal', () => {
        userInput = ['.']
        expect(isInputValid('+')).toBe(false)
    })
    // test('returns false if user enters two decimals as part of a single value', () => {
    //     userInput = ['12', '+', '1', '.', '2']
    //     expect(isInputValid('.')).toBe(false)
    // })
})


// look at the array backwards, do we encounter a decimal before an operator?

// find index of last operator or 0, use reverseFind
//
// take a slice of the array from that index onwards
// check if it contains a decimal

// see if userInput array contains a decimal
// reverse the array
// array.findIndexOf the first operator
// array.findIndexOf the first decimal
// if the decimal's index is less than the operator's, then return false

/*
['1', '2', '.', '5']
['0', '.', '4']
['*', '6', '.', '4']
*/