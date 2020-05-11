const { hasDecimal, isMultiplyOrDivide } = require('./helpers')

describe('tests for helper functions', () => {

    test('check hasDecimal exists', () => {
        expect(hasDecimal).toBeDefined()
    })

    test('check the tests work', () => {
        expect(hasDecimal('.')).toBe(true)
        expect(hasDecimal('-')).toBe(false)
        expect(hasDecimal('h')).toBe(false)
        expect(hasDecimal(6)).toBe('Please pass a string value')
        expect(hasDecimal(null)).toBe('Please pass a string value')

    })
})

describe('tests for isMultiplyOrDivide', () => {

    test('check if isMultiplyOrDivide exists', () => {
        expect(isMultiplyOrDivide).toBeDefined()
    })

    test('check the function works', () => {
        expect(isMultiplyOrDivide('+')).toBe(false)
        expect(isMultiplyOrDivide('*')).toBe(true)

    })
})