#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import {
  getRandomNumber, greetings, brainRules, brainGame,
} from '..';

const getRandomSign = () => {
  const randomNumberFrom1To3 = getRandomNumber(1, 3);
  switch (randomNumberFrom1To3) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};
const randomNumbersCalculation = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};
const getQuestionAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const randomSign = getRandomSign();
  const calcQuestion = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const calcAnswer = String(randomNumbersCalculation(randomNumber1, randomNumber2, randomSign));
  return cons(calcQuestion, calcAnswer);
};
const calcGame = () => {
  greetings();
  brainRules('What is the result of the expression?');
  brainGame(getQuestionAnswer);
};
export default calcGame;
