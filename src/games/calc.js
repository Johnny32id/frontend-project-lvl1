import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const brainCalcRule = 'What is the result of the expression?';
const getRandomSign = (signs) => {
  const randomIndex = getRandomNumber(0, signs.length - 1);
  return signs.charAt(randomIndex);
};
const calculate = (firstValue, secondValue, sign) => {
  switch (sign) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    default:
      return firstValue * secondValue;
  }
};
const signs = '+-*';
const getQuestionAnswer = () => {
  const firstValue = getRandomNumber(1, 100);
  const secondValue = getRandomNumber(1, 100);
  const randomSign = getRandomSign(signs);
  const question = `${firstValue} ${randomSign} ${secondValue}`;
  const answer = String(calculate(firstValue, secondValue, randomSign));
  return cons(question, answer);
};
export default () => {
  brainGame(getQuestionAnswer, brainCalcRule);
};
