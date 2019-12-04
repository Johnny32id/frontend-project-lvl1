import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const questionsQuantity = 3;
const brainGame = (getQuestionAnswer, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  for (let counter = 1; counter <= questionsQuantity; counter += 1) {
    const questionAnswer = getQuestionAnswer();
    const question = `Question: ${car(questionAnswer)}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const gameAnswer = cdr(questionAnswer);
    if (userAnswer === gameAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${gameAnswer}.`);
      console.log(`Let's try again, ${name}`);
      return;
    } console.log(`Congratulations, ${name}!`);
  }
};
export default brainGame;
