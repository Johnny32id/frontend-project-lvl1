import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getQuestionAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => {
  brainGame(getQuestionAnswer, brainEvenRule);
};
