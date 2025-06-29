import startGame from '../index.js'
const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const isPrime = (number) => {
  if (number < 2) return false
  if (number === 2) return true
  if (number % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false
  }
  return true
}

function getPrimeQuestion() {
  const number = Math.floor(Math.random() * 100) + 1
  const correct = isPrime(number) ? 'yes' : 'no'
  return {
    instruction: instruction,
    question: number,
    correctAnswer: correct,
  }
}

startGame(instruction, getPrimeQuestion)
export default getPrimeQuestion
