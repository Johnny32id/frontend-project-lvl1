import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const isEven = (number) => number % 2 === 0;
const getQuestionAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};
const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenGame = () => {
  brainGame(getQuestionAnswer, brainEvenRule);
};
export default evenGame;
