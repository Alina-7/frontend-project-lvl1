

import startGame from '../src/index.js';
const instruction = 'What number is missing in the progression?';

 function getProgression () {
        const startNum = Math.floor(Math.random()* 100) + 1;
        const step = Math.floor(Math.random()* 10) + 1; 
        const progression = [];
    for (let i=0; i < 10; i += 1) {
        let currentElement = startNum + i * step;
        progression.push(currentElement);
    }
    return progression
}



function getrProgQuestion () {
    const progression = getProgression ()
    const point = '..';
    const index = Math.floor(Math.random()* 9) + 1;

    const correct = progression[index];
    progression[index] = point;
    const question = progression.join(' ');

    return {
        instruction: instruction,
        question: question,
        correctAnswer: correct.toString()
    }
}

startGame(instruction, getrProgQuestion);

export default getrProgQuestion