#!/usr/bin/env node
import { brainEvenRules, greetings, brainGame, getRandomNumber, getRandomSign, commonDivisor } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainGcdRules();

export const getQuestionAnswer = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const gcdQuestion = `${randomNumber1} ${randomNumber2}`;
    const gcdAnswer = String(commonDivisor(randomNumber1, randomNumber2));
    return cons(gcdQuestion, gcdAnswer);
}
brainGame(getQuestionAnswer);