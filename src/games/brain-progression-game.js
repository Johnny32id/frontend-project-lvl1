#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const getProgressionWithReplace = (firstValue, difference) => {
  let progression = '';
  let progressionLength = 0;
  const desiredLength = 10;
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
  const randomDifference = getRandomNumber(2, 5);
  const progression = getProgressionWithReplace(randomProgressionStart, randomDifference);
  const question = car(progression);
  const answer = String(cdr(progression));
  return cons(question, answer);
};
const brainProgressionRule = 'What number is missing in the progression?';
const progressionGame = () => {
  brainGame(getQuestionAnswer, brainProgressionRule);
};
export default progressionGame;
