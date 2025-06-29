import startGame from '../index.js'
const instruction = 'What is the result of the expression?'

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
    }
}

function getCalcQuestion() {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const operator = operators[randomIndex];
    const task = `${firstNumber} ${operators[randomIndex]} ${secondNumber}`;
    const correct = calculate(firstNumber, secondNumber, operator).toString();
    return {
        instruction: instruction,
        question: task,
        correctAnswer: correct,
    }
}
startGame(instruction, getCalcQuestion)

export default getCalcQuestion
