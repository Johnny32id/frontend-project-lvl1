#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import { getRandomNumber, brainGame } from '..';

const commonDivisor = (firstNumber, secondNumber) => {
  let divisor = 1;
  for (let counter = 1; counter < firstNumber && counter < secondNumber; counter += 1) {
    if (firstNumber % counter === 0 && secondNumber % counter === 0) {
      divisor = counter;
    }
  } return divisor;
};
const getQuestionAnswer = () => {
  const firstNumeral = getRandomNumber(1, 100);
  const secondNumeral = getRandomNumber(1, 100);
  const gcdQuestion = `${firstNumeral} ${secondNumeral}`;
  const gcdAnswer = String(commonDivisor(firstNumeral, secondNumeral));
  return cons(gcdQuestion, gcdAnswer);
};
const gcdGame = () => {
  brainGame(getQuestionAnswer, 'Find the greatest common divisor of given numbers.');
};
export default gcdGame;
