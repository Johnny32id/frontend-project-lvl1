#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import { getRandomNumber, brainGame } from '..';

const getRandomSign = (signs) => {
  const randomIndex = getRandomNumber(0, signs.length - 1);
  return signs.charAt(randomIndex);
};
const getCalculate = (firstValue, secondValue, sign) => {
  switch (sign) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    default:
      return firstValue * secondValue;
  }
};
const getQuestionAnswer = () => {
  const firstValue = getRandomNumber(1, 100);
  const secondValue = getRandomNumber(1, 100);
  const randomSign = getRandomSign('+-*');
  const calcQuestion = `${firstValue} ${randomSign} ${secondValue}`;
  const calcAnswer = String(getCalculate(firstValue, secondValue, randomSign));
  return cons(calcQuestion, calcAnswer);
};
const calculationGame = () => {
  brainGame(getQuestionAnswer, 'What is the result of the expression?');
};
export default calculationGame;
