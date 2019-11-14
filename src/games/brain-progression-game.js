#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';

import { getRandomNumber, brainGame } from '..';

const getProgressionWithReplace = (firstValue, difference) => {
  let progression = `${firstValue}`;
  let counter = 1;
  while (counter < 10) {
    const nextProgressionNumber = firstValue + difference * counter;
    progression += ` ${nextProgressionNumber}`;
    counter += 1;
  }
  const randomReplace = firstValue + difference * getRandomNumber(1, counter);
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
const progressionGame = () => {
  brainGame(getQuestionAnswer, 'What number is missing in the progression?');
};
export default progressionGame;
