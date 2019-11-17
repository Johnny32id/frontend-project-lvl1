#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const getProgressionWithReplace = (firstValue, difference) => {
  let progression = '';
  let progressionLength = 0;
  while (progressionLength < 10) {
    const nextProgressionNumber = firstValue + difference * progressionLength;
    progression = `${progression}${nextProgressionNumber} `;
    progressionLength += 1;
  }
  const randomReplace = firstValue + difference * getRandomNumber(1, progressionLength);
  return cons(progression.replace(randomReplace, '..'), randomReplace);
};
const getQuestionAnswer = () => {
  const randomProgressionStart = getRandomNumber(2, 50);
  const randomDifference = getRandomNumber(2, 5);
  const progression = getProgressionWithReplace(randomProgressionStart, randomDifference);
  const progressionQuestion = car(progression);
  const progressionAnswer = String(cdr(progression));
  return cons(progressionQuestion, progressionAnswer);
};
const brainProgressionRule = 'What number is missing in the progression?';
const progressionGame = () => {
  brainGame(getQuestionAnswer, brainProgressionRule);
};
export default progressionGame;
