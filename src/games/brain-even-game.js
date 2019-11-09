#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

import { getRandomNumber } from '..';

const getQuestionAnswer = () => {
  const evenQuestion = getRandomNumber(1, 100);
  const evenAnswer = evenQuestion % 2 === 0 ? 'yes' : 'no';
  return cons(evenQuestion, evenAnswer);
};
export default getQuestionAnswer;
