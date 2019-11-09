import { cons } from '@hexlet/pairs';

import { getRandomNumber } from '..';

const isPrime = (number) => {
  let divisorCounter = 0;
  for (let divisor = 1; divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      divisorCounter += 1;
    }
  }
  return divisorCounter === 2 ? 'yes' : 'no';
};
const getQuestionAnswer = () => {
  const primeQuestion = getRandomNumber(1, 1000);
  const primeAnswer = isPrime(primeQuestion);
  return cons(primeQuestion, primeAnswer);
};
export default getQuestionAnswer;
