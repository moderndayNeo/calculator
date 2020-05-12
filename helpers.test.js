const { hasDecimal, isMultiplyOrDivide, isAddOrSubtract } = require('./helpers')

describe('tests for hasDecimal', () => {
    
    test('hasDecimal exists', () => {
        expect(hasDecimal).toBeDefined()
    })
    test('returns true when string contains a decimal', () => {
        expect(hasDecimal('.')).toBe(true)
        expect(hasDecimal('123.456')).toBe(true)
    })
    test('returns false when string does not contain a decimal', () => {
        expect(hasDecimal('-')).toBe(false)
        expect(hasDecimal('h')).toBe(false)
    })
    test('returns a message when a string value is not passed', () => {
        expect(hasDecimal(6)).toBe('Please pass a string value')
        expect(hasDecimal(null)).toBe('Please pass a string value')    
    })
})


describe('tests for isMultiplyOrDivide', () => {

    test('isMultiplyOrDivide exists', () => {
        expect(isMultiplyOrDivide).toBeDefined()
    })
    test('returns true when the string contains a multiply or divide symbol', () => {
        expect(isMultiplyOrDivide('*')).toBe(true)
        expect(isMultiplyOrDivide('/')).toBe(true)
    })
    test('returns false when another symbol is passed', () => {
        expect(isMultiplyOrDivide('+')).toBe(false)
        expect(isMultiplyOrDivide('-')).toBe(false)
        expect(isMultiplyOrDivide('#')).toBe(false)
        expect(isMultiplyOrDivide('.')).toBe(false)
    })
    test('returns false when a number string is passed', () => {
        expect(isMultiplyOrDivide('5')).toBe(false)
        expect(isMultiplyOrDivide('1234567890')).toBe(false)
        expect(isMultiplyOrDivide('12/34')).toBe(false)
    })
})

describe('tests for isAddOrSubtract', () => {
    
    test('isAddOrSubtract exists', () => {
        expect(isAddOrSubtract).toBeDefined()
    })
    test('returns true when an add or subtract symbol is passed', () => {
        expect(isAddOrSubtract('+')).toBe(true)
        expect(isAddOrSubtract('-')).toBe(true)
    })
    test('returns false when a different symbol is passed', () => {
        expect(isAddOrSubtract('*')).toBe(false)
        expect(isAddOrSubtract('/')).toBe(false)
    })
    test('returns false when a number string is passed', () => {
        expect(isAddOrSubtract('1234567890')).toBe(false)
        expect(isAddOrSubtract('12+56')).toBe(false)
    })
})
