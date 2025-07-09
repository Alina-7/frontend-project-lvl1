import startGame from '../index.js'
import getRandomNumber from '../utils.js'

const instruction = 'What number is missing in the progression?'

function getProgression() {
    const startNum = getRandomNumber(0, 100)
    const step = getRandomNumber(1, 10)
    const progression = []
    for (let i = 0; i < 10; i += 1) {
        let currentElement = startNum + i * step
        progression.push(currentElement)
    }
    return progression
}

function getrProgQuestion() {
    const progression = getProgression()
    const point = '..'
    const index = getRandomNumber(0, 9)

    const correct = progression[index]
    progression[index] = point
    const question = progression.join(' ')

    return {
        instruction: instruction,
        question: question,
        correctAnswer: correct.toString(),
    }
}

startGame(instruction, getrProgQuestion)

export default getrProgQuestion
