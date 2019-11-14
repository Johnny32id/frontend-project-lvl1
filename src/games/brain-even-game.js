#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import { getRandomNumber, brainGame } from '..';

const isEven = (number) => number % 2 === 0;
const getQuestionAnswer = () => {
  const evenQuestion = getRandomNumber(1, 100);
  const evenAnswer = isEven(evenQuestion) ? 'yes' : 'no';
  return cons(evenQuestion, evenAnswer);
};
const evenGame = () => {
  brainGame(getQuestionAnswer, 'Answer "yes" if the number is even, otherwise answer "no".');
};
export default evenGame;
