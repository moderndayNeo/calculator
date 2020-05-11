const { removeLastFromString, isOperator } = require('./validateInput')



describe('check removeLastFromString exists', () => {
    test('check it exists', () => {
        expect(removeLastFromString).toBeDefined()
        expect(removeLastFromString('potato')).toBe('potat')
    })
})

describe('checks isOperator exists', () => {
    test('...', () => {
        expect(isOperator).toBeDefined()
        expect(isOperator('6')).toBe(false)
        expect(isOperator('*')).toBe(true)
    })
})