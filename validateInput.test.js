const { removeLastFromString, isOperator, getLastValue } = require('./validateInput')

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










describe('checks isOperator exists', () => {
    test('...', () => {
        expect(isOperator).toBeDefined()
        expect(isOperator('6')).toBe(false)
        expect(isOperator('*')).toBe(true)
    })
})