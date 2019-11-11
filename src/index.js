import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

export const greetings = () => (console.log('Welcome to the Brain Games!'));
export const brainRules = (rule) => (console.log(rule));
export const askUserName = () => (readlineSync.question('May I have your name?'));
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const brainGame = (getQuestionAnswer) => {
  const name = askUserName();
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
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${cdr(questionAnswer)}.\nLet's try again, ${name}`);
      break;
    }
  }
};
