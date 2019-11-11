#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import {
  getRandomNumber, greetings, brainRules, brainGame,
} from '..';

const commonDivisor = (firstNumber, secondNumber) => {
  let divisor = 1;
  for (let counter = 1; counter < firstNumber && counter < secondNumber; counter += 1) {
    if (firstNumber % counter === 0 && secondNumber % counter === 0) {
      divisor = counter;
    }
  } return divisor;
};
const getQuestionAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const gcdQuestion = `${randomNumber1} ${randomNumber2}`;
  const gcdAnswer = String(commonDivisor(randomNumber1, randomNumber2));
  return cons(gcdQuestion, gcdAnswer);
};
const gcdGame = () => {
  greetings();
  brainRules('Find the greatest common divisor of given numbers.');
  brainGame(getQuestionAnswer);
};
export default gcdGame;
