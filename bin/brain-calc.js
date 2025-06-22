import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
const name = greeting();

function calculate (firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+": 
           return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
    }
}

function calc () {
let trueAnswer = 0;
    while (trueAnswer < 3) {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);  
    const operator = operators[randomIndex]; 
    console.log('What is the result of the expression?')
    const task = `${firstNumber} ${operators[randomIndex]} ${secondNumber}`;
    console.log(`Question: ${task}`)
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculate(firstNumber, secondNumber, operator)
    if (correctAnswer === parseInt(userAnswer)) {
        console.log('Correct!');
        trueAnswer ++;
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`)
        trueAnswer = 0;
        return;
    }
    }
    console.log(`Congratulations, ${name}!`)
}
calc();

export default calc;