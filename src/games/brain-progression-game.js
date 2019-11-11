#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';

import {
  getRandomNumber, greetings, brainRules, brainGame,
} from '..';

const getProgressionWithReplace = (firstNumber, difference, randomNumber) => {
  let progression = `${firstNumber}`;
  for (let counter = 1; counter < 10; counter += 1) {
    const nextProgressionNumber = firstNumber + difference * counter;
    progression += ` ${nextProgressionNumber}`;
  }
  const randomReplace = firstNumber + difference * randomNumber;
  return cons(progression.replace(randomReplace, '..'), randomReplace);
};
const getQuestionAnswer = () => {
  const randomNumber = getRandomNumber(2, 50);
  const randomDifference = getRandomNumber(2, 5);
  const randomReplacement = getRandomNumber(1, 9);
  const progression = getProgressionWithReplace(randomNumber, randomDifference, randomReplacement);
  const progQuestion = car(progression);
  const progAnswer = String(cdr(progression));
  return cons(progQuestion, progAnswer);
};
const progressionGame = () => {
  greetings();
  brainRules('What number is missing in the progression?');
  brainGame(getQuestionAnswer);
};
export default progressionGame;
