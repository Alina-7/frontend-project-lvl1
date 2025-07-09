import startGame from '../index.js'
import getRandomNumber from '../utils.js'
const instruction = 'Answer "yes" if the number is even, otherwise answer "no".'

function getEvenQuestion() {
        const number = getRandomNumber(0, 100)
        const isEven = number % 2 === 0
        const correct = isEven ? 'yes' : 'no'
        return {
                instruction: instruction,
                question: number,
                correctAnswer: correct,
        }
}

startGame(instruction, getEvenQuestion)
export default getEvenQuestion
