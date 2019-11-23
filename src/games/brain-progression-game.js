#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const getProgressionWithReplace = (firstValue) => {
  let progression = '';
  let progressionLength = 0;
  const desiredLength = 10;
  const difference = 2;
  while (progressionLength < desiredLength) {
    const nextProgressionValue = firstValue + difference * progressionLength;
    progression = `${progression}${nextProgressionValue} `;
    progressionLength += 1;
  }
  const randomReplace = firstValue + difference * getRandomNumber(1, progressionLength);
  return cons(progression.replace(randomReplace, '..'), randomReplace);
};
const getQuestionAnswer = () => {
  const randomProgressionStart = getRandomNumber(2, 50);
  const progression = getProgressionWithReplace(randomProgressionStart);
  const question = car(progression);
  const answer = String(cdr(progression));
  return cons(question, answer);
};
const brainProgressionRule = 'What number is missing in the progression?';
const progressionGame = () => {
  brainGame(getQuestionAnswer, brainProgressionRule);
};
export default progressionGame;
