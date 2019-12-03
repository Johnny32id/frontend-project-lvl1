import { cons, car, cdr } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const progressionLength = 10;
const difference = getRandomNumber(2, 5);
const getProgressionWithReplaceRandomMember = (firstValue) => {
  let progression = '';
  let progressionCounter = 0;
  while (progressionCounter < progressionLength) {
    const nextProgressionValue = firstValue + difference * progressionCounter;
    progression = `${progression}${nextProgressionValue} `;
    progressionCounter += 1;
  }
  const valueToReplace = firstValue + difference * getRandomNumber(1, progressionCounter);
  return cons(progression.trim().replace(valueToReplace, '..'), valueToReplace);
};
const getQuestionAnswer = () => {
  const randomProgressionStart = getRandomNumber(2, 50);
  const progression = getProgressionWithReplaceRandomMember(randomProgressionStart);
  const question = car(progression);
  const answer = String(cdr(progression));
  return cons(question, answer);
};
const brainProgressionRule = 'What number is missing in the progression?';
const progressionGame = () => {
  brainGame(getQuestionAnswer, brainProgressionRule);
};
export default progressionGame;
