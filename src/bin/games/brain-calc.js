#!/usr/bin/env node
import {greetings, brainGame, getRandomNumber, getRandomSign, randomNumbersCalculation, brainRules } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainRules('What is the result of the expression?');

export const getQuestionAnswer = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const randomSign = getRandomSign();
    const calcQuestion = `${randomNumber1} ${randomSign} ${randomNumber2}`;
    const calcAnswer = String(randomNumbersCalculation(randomNumber1, randomNumber2, randomSign));
    return cons(calcQuestion, calcAnswer);
}
brainGame(getQuestionAnswer);