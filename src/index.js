import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const brainGame = (getQuestionAnswer, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  const questionsQuantity = 3;
  for (let counter = 0; counter <= questionsQuantity; counter += 1) {
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
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
      break;
    }
  }
};
export default brainGame;
