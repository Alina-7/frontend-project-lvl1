import playGame from '../src/index.js';
const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

function getEvenQuestion () {
const number = Math.floor(Math.random() *100) + 1;
const question = `Question: ${number}`;
const isEven = number % 2 === 0;
const correct = isEven ? 'yes' : 'no';
return{
        instruction: instruction,
        question: question,
        correctAnswer: correct
}
} 

playGame(instruction, getEvenQuestion);
export default getEvenQuestion;


 

