import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const brainProgressionRule = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestion = (firstValue, difference, valueToSkip) => {
  let progression = '';
  for (let counter = 0; counter < progressionLength; counter += 1) {
    if (counter === valueToSkip) {
      progression = `${progression}.. `;
    } else {
      const nextProgressionValue = firstValue + difference * counter;
      progression = `${progression}${nextProgressionValue} `;
    }
  }
  return progression.trim();
};
const getQuestionAnswer = () => {
  const randomProgressionStart = getRandomNumber(2, 50);
  const randomDifference = getRandomNumber(2, 5);
  const counterValueToSkip = getRandomNumber(0, progressionLength - 1);
  const question = getQuestion(randomProgressionStart, randomDifference, counterValueToSkip);
  const answer = String(randomProgressionStart + randomDifference * counterValueToSkip);
  return cons(question, answer);
};
export default () => {
  brainGame(getQuestionAnswer, brainProgressionRule);
};
