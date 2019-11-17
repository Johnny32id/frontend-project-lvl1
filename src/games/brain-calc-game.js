#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

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
  const listOfCharacters = '+-*';
  const randomSign = getRandomSign(listOfCharacters);
  const calcQuestion = `${firstValue} ${randomSign} ${secondValue}`;
  const calcAnswer = String(getCalculate(firstValue, secondValue, randomSign));
  return cons(calcQuestion, calcAnswer);
};
const brainCalcRule = 'What is the result of the expression?';
const calculationGame = () => {
  brainGame(getQuestionAnswer, brainCalcRule);
};
export default calculationGame;
