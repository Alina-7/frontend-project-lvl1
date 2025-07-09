import startGame from '../index.js'
import getRandomNumber from '../utils.js'
const instruction = 'What is the result of the expression?'

function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber
    case '-':
      return firstNumber - secondNumber
    case '*':
      return firstNumber * secondNumber
  }
}

function getCalcQuestion() {
  const operators = ['+', '-', '*']
  const randomIndex = getRandomNumber(0, operators.length)
  const firstNumber = getRandomNumber(0, 100)
  const secondNumber = getRandomNumber(0, 10)
  const operator = operators[randomIndex]
  const task = `${firstNumber} ${operators[randomIndex]} ${secondNumber}`
  const correct = calculate(firstNumber, secondNumber, operator).toString()
  return {
    instruction: instruction,
    question: task,
    correctAnswer: correct,
  }
}
startGame(instruction, getCalcQuestion)

export default getCalcQuestion
