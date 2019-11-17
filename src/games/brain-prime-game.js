import { cons } from '@hexlet/pairs';

import brainGame from '..';

import getRandomNumber from '../utils';

const isPrime = (value) => {
  let divisorCounter = 0;
  for (let divisor = 1; divisor <= value / 2; divisor += 1) {
    if (value % divisor === 0) {
      divisorCounter += 1;
    }
  }
  return divisorCounter === 1;
};
const getQuestionAnswer = () => {
  const primeQuestion = getRandomNumber(1, 1000);
  const primeAnswer = isPrime(primeQuestion) ? 'yes' : 'no';
  return cons(primeQuestion, primeAnswer);
};
const brainPrimeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeGame = () => {
  brainGame(getQuestionAnswer, brainPrimeRule);
};
export default primeGame;
