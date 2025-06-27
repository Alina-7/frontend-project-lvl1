
import readlineSync from 'readline-sync'
import greeting from '../src/cli.js'
const name = greeting()

function startGame(instruction, getData) {
    console.log(instruction);
    let trueAnswer = 0;

    while (trueAnswer < 3) {
        const { question, correctAnswer } = getData();

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

        if (correctAnswer === userAnswer) {
            console.log('Correct!');
            trueAnswer++;
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`)
            trueAnswer = 0;
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

export default startGame
