import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
const name = greeting();

function getAsk (){
 console.log('Answer "yes" if the number is even, otherwise answer "no".');

   let trueAnswer = 0;

while (trueAnswer < 3) {
const number = Math.floor(Math.random() *100) + 1;
 const isEven = number % 2 === 0;
console.log(`Question: ${number}`);
const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
const correct = isEven ? 'yes' : 'no';
// console.log(`Your answer: ${answer}`)
if (answer === "yes" || answer === "no") {
    if(answer === correct) {
        trueAnswer++
        console.log("Correct!")
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven ?'yes' : 'no'}.
Let's try again, ${name}!` )
trueAnswer = 0;
return
    }
} else {
 console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven ?'yes' : 'no'}.
Let's try again, ${name}!` )
return
}
}
 console.log(`Congratulations, ${name}!`)
} 

export default getAsk;


 
