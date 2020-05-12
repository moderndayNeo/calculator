const { removeLastFromString, isOperator, getLastValue, checkLastFourDigits, shortenLongNumbers } = require('./validateInput')

describe('tests for removeLastFromString', () => {
    test('removeLastFromString exists', () => {
        expect(removeLastFromString).toBeDefined()
    })
    test('returns a string with the last character removed', () => {
        expect(removeLastFromString('string')).toBe('strin')
        expect(removeLastFromString('example')).toBe('exampl')
    })
    test('returns a message if the string is empty', () => {
        expect(removeLastFromString('')).toBe('Error: string contains no values')
    })
    test('returns a message if a non-string value is passed', () => {
        expect(removeLastFromString(6)).toBe('Error: please pass a string value. You passed 6 of type number')
        expect(removeLastFromString([])).toBe('Error: please pass a string value. You passed  of type object')
    })
})

describe('tests for getLastValue', () => {
    test('getLastValue exists', () => {
        expect(getLastValue).toBeDefined()
    })
    test('returns the last value in an array', () => {
        expect(getLastValue(['1','2','3'])).toBe('3')
        expect(getLastValue(['1','2','5'])).toBe('5')
        expect(getLastValue(['1','2','6'])).toBe('6')
    })
    test('returns a message if the array is empty', () => {
        expect(getLastValue([])).toBe('Error: you passed an empty array')
    })
    test('returns a message if a non-array type is passed', () => {
        expect(getLastValue('string')).toBe('Error: you passed string, of type: string')
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
    test('returns a message if it doesn\'t receive a string value', () => {
        expect(checkLastFourDigits(6)).toBe('Error in checkLastFourDigits: String required. You passed 6 of type: number')
        expect(checkLastFourDigits(1234.5678)).toBe('Error in checkLastFourDigits: String required. You passed 1234.5678 of type: number')
    })
    test('returns the number string unmodified if fewer than 4 decimal places', () => {
        expect(checkLastFourDigits('123.456')).toBe('123.456')
        expect(checkLastFourDigits('123456.78')).toBe('123456.78')
    })
    test('returns a message if value passed is not a floating value', () => {
        expect(checkLastFourDigits('123456')).toBe('Error: Value passed is not a floating value')
    })
})


describe('tests for shortenLongNumbers', () => {
    test('shortenLongNumbers exists', () => {
        expect(shortenLongNumbers).toBeDefined()
    })
    test('returns a message if value passed is not type number', () => {
        expect(shortenLongNumbers('string')).toBe('Error in shortenLongNumbers: Number type required. You passed string of type: string')
        expect(shortenLongNumbers('5')).toBe('Error in shortenLongNumbers: Number type required. You passed 5 of type: string')
    })
    // test('returns a string type when passed a number', () => {
    //     const result = shortenLongNumbers(12345)
    //     expect(typeof result).toBe('string')
    // })
})




describe('checks isOperator exists', () => {
    test('...', () => {
        expect(isOperator).toBeDefined()
        expect(isOperator('6')).toBe(false)
        expect(isOperator('*')).toBe(true)
    })
})