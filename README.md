<img src="./media/shield.svg">

* Live demo: https://moderndayneo.github.io/calculator/ 

# Desktop View
![calc-desktop](https://user-images.githubusercontent.com/57966028/81932556-e1679c00-95e3-11ea-84b2-4f9eec2a2cfb.gif)

# Mobile View
![calc-mobile](https://user-images.githubusercontent.com/57966028/81932134-30f99800-95e3-11ea-8e98-2799f3ac14a1.gif)


# Table Of Contents
* [Outline](#outline)
* [Technologies](#technologies)
* [Illustrations](#illustrations)

## Outline
*This project is compatible with mobile, tablet and desktop*

This calculator works by pushing each button's assigned value to an array. The user's input is first checked as valid. If valid, the equation is calculated and displayed on the screen.

Note: This calculator was first made using the eval() method. Having learned of the security flaws in using eval(), I rebuilt the calculator using number methods and without the use of eval().

## Technologies
I made this calculator using pure HTML, CSS and JavaScript.

## The Code

### Input validation
```
const getIndexLastOperator = (arr) => {
    if (arr.some((value) => isOperator(value)) === false) return -1

    const lastPlus = arr.lastIndexOf('+')
    const lastMinus = arr.lastIndexOf('-')
    const lastMultiply = arr.lastIndexOf('*')
    const lastDivide = arr.lastIndexOf('/')
    const indexes = [lastPlus, lastDivide, lastMinus, lastMultiply]
    const sorted = indexes.sort()
    const indexLastOperator = sorted[3]

    return indexLastOperator
}

const isInputValid = (desiredValue) => {
    const lastValue = getLastValue(userInput)

    if (lastValue === '.') {
        if (desiredValue === '.') return false
        if (isOperator(desiredValue)) return false
    }

    if (desiredValue === '.' && userInput.includes('.')) {
        const indexLastDecimal = userInput.lastIndexOf('.')
        const indexLastOperator = getIndexLastOperator(userInput)
        if (indexLastDecimal > indexLastOperator) return false
    }

    if (!isOperator(lastValue)) {
        return true
    }

    if (isOperator(desiredValue)) {
        return false
    }

    return true
}
```
