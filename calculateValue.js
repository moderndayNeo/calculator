function countTheOperators(arr) {
  const opCount = arr.filter(x => OPERATOR_VALUES.includes(x)).length;
  return opCount;
}

function calculate(leftValue, operator, rightValue) {
  const leftNumber = parseFloat(leftValue);
  const rightNumber = parseFloat(rightValue);
  let calculatedNumber = 0;

  switch (operator) {
    case "/":
      calculatedNumber = leftNumber / rightNumber;
      break;
    case "*":
      calculatedNumber = leftNumber * rightNumber;
      break;
    case "+":
      calculatedNumber = leftNumber + rightNumber;
      break;
    case "-":
      calculatedNumber = leftNumber - rightNumber;
      break;
  }

  return calculatedNumber.toString();
}

function isMoreThanOneValue(arr) {
  return arr.length > 1;
}

function isMultiplyOrDivide(val) {
  return val === "*" || val === "/";
}

function isAddOrSubtract(val) {
  return val === "+" || val === "-";
}

const NUMBERS_AND_DECIMAL = "0123456789.";

function isANumberOrDecimal(val) {
  return NUMBERS_AND_DECIMAL.includes(val);
}

function mergeAnyConsecutiveNumbers(arr) {
  let holdingValue = "";
  const arrayWithNumbersConcatenated = [];

  for (let i = 0; i < arr.length; i++) {
    const currentArrayValue = arr[i];

    if (isANumberOrDecimal(currentArrayValue)) {
      holdingValue += currentArrayValue;
    } else {
      arrayWithNumbersConcatenated.push(holdingValue);
      arrayWithNumbersConcatenated.push(currentArrayValue);
      holdingValue = "";
    }
  }
  arrayWithNumbersConcatenated.push(holdingValue);

  return arrayWithNumbersConcatenated;
}

function containsMulOrDiv(arr) {
  return arr.includes("*") || arr.includes("/");
}

function containsAddOrSub(arr) {
  return arr.includes("+") || arr.includes("-");
}

function processMultiplyAndDivide(equation) {
  const positionFirstMulOrDiv = equation.findIndex(isMultiplyOrDivide);
  const leftOfOperator = positionFirstMulOrDiv - 1;
  const rightOfOperator = positionFirstMulOrDiv + 1;

  const chunkToCalculate = equation.slice(leftOfOperator, rightOfOperator + 1);
  const result = calculate(...chunkToCalculate);
  const leftOfChunk = equation.slice(0, leftOfOperator);
  const rightOfChunk = equation.slice(rightOfOperator + 1, equation.length);

  const mulAndDivProcessed = [...leftOfChunk, result, ...rightOfChunk];

  if (!containsMulOrDiv(mulAndDivProcessed)) {
    return mulAndDivProcessed;
  }

  return processMultiplyAndDivide(mulAndDivProcessed);
}

function processAddAndSubtract(equation) {
  const positionFirstAddOrSub = equation.findIndex(isAddOrSubtract);
  const leftOfOperator = positionFirstAddOrSub - 1;
  const rightOfOperator = positionFirstAddOrSub + 1;

  const chunkToCalculate = equation.slice(leftOfOperator, rightOfOperator + 1);
  const result = calculate(...chunkToCalculate);
  const leftOfChunk = equation.slice(0, leftOfOperator);
  const rightOfChunk = equation.slice(rightOfOperator + 1, equation.length);

  const addAndSubtractProcessed = [...leftOfChunk, result, ...rightOfChunk];

  if (!containsAddOrSub(addAndSubtractProcessed)) {
    return addAndSubtractProcessed;
  }

  return processAddAndSubtract(addAndSubtractProcessed);
}


const arr4 = ["5", "*", "8", "/", "6"];
const arr5 = ["5", "+", "6",'*','79','-','7','/','8'];
const arr3 = ["12", "/", "5", "*", "7", "-", "2", "*", "4", "/", "2"];

const arr6 = processMultiplyAndDivide(arr5)
const arr7 = processAddAndSubtract(arr6)
// console.log(arr7);


function calculateFinalValue(inputArray) {
    // eventually array has one value
    // send the one value to userInput. Break up the characters
    // set display, user input
    const equation = mergeAnyConsecutiveNumbers(inputArray);
    const mulsDivsProcessed = processMultiplyAndDivide(equation);
    const calculatedResult = processAddAndSubtract(mulsDivsProcessed);
    // console.log(calculatedResult)
    
  return calculatedResult;
}