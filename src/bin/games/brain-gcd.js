#!/usr/bin/env node
import {greetings, brainGame, getRandomNumber, commonDivisor, brainRules } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainRules("Find the greatest common divisor of given numbers.");

const getQuestionAnswer = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const gcdQuestion = `${randomNumber1} ${randomNumber2}`;
    const gcdAnswer = String(commonDivisor(randomNumber1, randomNumber2));
    return cons(gcdQuestion, gcdAnswer);
}
brainGame(getQuestionAnswer);