import { cons } from '@hexlet/pairs';

import { getRandomNumber, brainGame } from '..';

const isPrime = (value) => {
  let divisorCounter = 0;
  for (let divisor = 1; divisor <= value; divisor += 1) {
    if (value % divisor === 0) {
      divisorCounter += 1;
    }
  }
  return divisorCounter === 2;
};
const getQuestionAnswer = () => {
  const primeQuestion = getRandomNumber(1, 1000);
  const primeAnswer = isPrime(primeQuestion) ? 'yes' : 'no';
  return cons(primeQuestion, primeAnswer);
};
const primeGame = () => {
  brainGame(getQuestionAnswer, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
export default primeGame;
