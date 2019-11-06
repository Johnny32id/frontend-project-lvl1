#!/usr/bin/env node
import {greetings, brainGame, getRandomNumber, getRandomSign, brainCalcRules, randomNumbersCalculation } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainCalcRules();

export const getQuestionAnswer = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const randomSign = getRandomSign();
    const calcQuestion = `${randomNumber1} ${randomSign} ${randomNumber2}`;
    const calcAnswer = String(randomNumbersCalculation(randomNumber1, randomNumber2, randomSign));
    return cons(calcQuestion, calcAnswer);
}
brainGame(getQuestionAnswer);