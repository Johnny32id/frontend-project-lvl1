#!/usr/bin/env node
import {greetings, brainGame, getRandomNumber, brainRules, isPrime } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainRules("Answer \"yes\" if given number is prime. Otherwise answer \"no\".");

const getQuestionAnswer = () => {
    const primeQuestion = getRandomNumber(1, 1000);
    const primeAnswer = isPrime(primeQuestion);
    return cons(primeQuestion, primeAnswer);
}
brainGame(getQuestionAnswer);