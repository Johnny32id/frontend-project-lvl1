#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import {
  getRandomNumber, greetings, brainRules, brainGame,
} from '..';

const isEven = (number) => number % 2 === 0;
const getQuestionAnswer = () => {
  const evenQuestion = getRandomNumber(1, 100);
  const evenAnswer = isEven(evenQuestion) ? 'yes' : 'no';
  return cons(evenQuestion, evenAnswer);
};
const evenGame = () => {
  greetings();
  brainRules('Answer "yes" if the number is even, otherwise answer "no".');
  brainGame(getQuestionAnswer);
};
export default evenGame;
