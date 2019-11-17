import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const brainGame = (getQuestionAnswer, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  for (let counter = 0; counter <= 3; counter += 1) {
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const questionAnswer = getQuestionAnswer();
    console.log(`Question: ${car(questionAnswer)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === cdr(questionAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${cdr(questionAnswer)}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};
export default brainGame;
