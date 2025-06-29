import startGame from '../index.js'
const instruction = 'Find the greatest common divisor of given numbers.'

const calculateGcd = (a, b) => {
  while (b !== 0) {
    let num = b // сохраняем текущее значение b
    b = a % b
    a = num
  }
  return a
}

function getGcdQuestion() {
  const a = Math.floor(Math.random() * 100) + 1
  const b = Math.floor(Math.random() * 100) + 1
  const question = `${a} ${b}`
  const correct = calculateGcd(a, b).toString()
  return {
    instruction: instruction,
    question: question,
    correctAnswer: correct,
  }
}

startGame(instruction, getGcdQuestion)
export default getGcdQuestion
