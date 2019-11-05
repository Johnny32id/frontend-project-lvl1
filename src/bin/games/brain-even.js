#!/usr/bin/env node
import { brainEvenRules, greetings, brainGame, getRandomNumber } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainEvenRules();

export const questionAnswer = () => {
    const evenQuestion = getRandomNumber(1, 100);
    const evenAnswer = evenQuestion % 2 === 0 ? "yes" : "no";
    return cons(evenQuestion, evenAnswer);
}
brainGame();
