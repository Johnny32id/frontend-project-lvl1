#!/usr/bin/env node
import { brainEvenRules, greetings, brainGame, getRandomNumber, getRandomSign } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainEvenRules();

export const questionAnswer = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const randomSign = getRandomSign();
    const calcQuestion = `${randomNumber1} ${randomSign} ${randomNumber2}`;
    const calcAnswer = String(eval(`${randomNumber1} ${randomSign} ${randomNumber2}`));
    return cons(calcQuestion, calcAnswer);
}
brainGame(questionAnswer);