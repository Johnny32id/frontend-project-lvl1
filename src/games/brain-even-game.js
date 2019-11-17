#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const isEven = (number) => number % 2 === 0;
const getQuestionAnswer = () => {
  const evenQuestion = getRandomNumber(1, 100);
  const evenAnswer = isEven(evenQuestion) ? 'yes' : 'no';
  return cons(evenQuestion, evenAnswer);
};
const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenGame = () => {
  brainGame(getQuestionAnswer, brainEvenRule);
};
export default evenGame;
