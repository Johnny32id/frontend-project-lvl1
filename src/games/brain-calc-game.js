#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import { getRandomNumber } from '..';

const getRandomSign = () => {
  const random = getRandomNumber(1, 3);
  if (random === 1) {
    return '+';
  } if (random === 2) {
    return '-';
  } return '*';
};
const randomNumbersCalculation = (firstNumber, secondNumber, sign) => {
  if (sign === '+') {
    return firstNumber + secondNumber;
  } if (sign === '-') {
    return firstNumber - secondNumber;
  } return firstNumber * secondNumber;
};
const getQuestionAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const randomSign = getRandomSign();
  const calcQuestion = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const calcAnswer = String(randomNumbersCalculation(randomNumber1, randomNumber2, randomSign));
  return cons(calcQuestion, calcAnswer);
};
export default getQuestionAnswer;
