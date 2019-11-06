#!/usr/bin/env node
import {greetings, brainGame, getRandomNumber, brainRules, } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainRules("Answer \"yes\" if the number is even, otherwise answer \"no\".");

export const getQuestionAnswer = () => {
    const evenQuestion = getRandomNumber(1, 100);
    const evenAnswer = evenQuestion % 2 === 0 ? "yes" : "no";
    return cons(evenQuestion, evenAnswer);
}
brainGame(getQuestionAnswer);
