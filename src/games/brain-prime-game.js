import { cons } from '@hexlet/pairs';

import {
  getRandomNumber, greetings, brainRules, brainGame,
} from '..';

const getPrimeNumber = (number) => {
  let divisorCounter = 0;
  for (let divisor = 1; divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      divisorCounter += 1;
    }
  }
  return divisorCounter;
};
const isPrime = (number) => number === 2;
const getQuestionAnswer = () => {
  const primeQuestion = getRandomNumber(1, 1000);
  const primeAnswer = isPrime(getPrimeNumber(primeQuestion)) ? 'yes' : 'no';
  return cons(primeQuestion, primeAnswer);
};
const primeGame = () => {
  greetings();
  brainRules('Answer "yes" if given number is prime. Otherwise answer "no".');
  brainGame(getQuestionAnswer);
};
export default primeGame;
