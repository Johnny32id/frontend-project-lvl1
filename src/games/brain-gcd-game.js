#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const commonDivisorOfTwoValues = (firstValue, secondValue) => {
  let divisor = 1;
  for (let counter = 1; counter < firstValue && counter < secondValue; counter += 1) {
    if (firstValue % counter === 0 && secondValue % counter === 0) {
      divisor = counter;
    }
  } return divisor;
};
const getQuestionAnswer = () => {
  const firstValue = getRandomNumber(1, 100);
  const secondValue = getRandomNumber(1, 100);
  const question = `${firstValue} ${secondValue}`;
  const answer = String(commonDivisorOfTwoValues(firstValue, secondValue));
  return cons(question, answer);
};
const brainGcdRule = 'Find the greatest common divisor of given numbers.';
const gcdGame = () => {
  brainGame(getQuestionAnswer, brainGcdRule);
};
export default gcdGame;
