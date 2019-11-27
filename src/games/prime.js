import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const isPrime = (value) => {
  if (value <= 1) {
    return false;
  }
  let divisorCounter = 0;
  for (let divisor = 1; divisor <= value / 2; divisor += 1) {
    if (value % divisor === 0) {
      divisorCounter += 1;
    }
    if (divisorCounter > 1) {
      return false;
    }
  }
  return divisorCounter === 1;
};
const getQuestionAnswer = () => {
  const question = getRandomNumber(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};
const brainPrimeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeGame = () => {
  brainGame(getQuestionAnswer, brainPrimeRule);
};
export default primeGame;
