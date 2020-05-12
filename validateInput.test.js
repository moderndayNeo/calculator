const { removeLastFromString, isOperator } = require('./validateInput')

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



describe('checks isOperator exists', () => {
    test('...', () => {
        expect(isOperator).toBeDefined()
        expect(isOperator('6')).toBe(false)
        expect(isOperator('*')).toBe(true)
    })
})