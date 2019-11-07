#!/usr/bin/env node
import {greetings, brainGame, getRandomNumber, brainRules, arithmeticProgression } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainRules('What number is missing in the progression?');

const getQuestionAnswer = () => {
    const randomNumber = getRandomNumber(2, 50);
    const randomDifference = getRandomNumber(2, 5);
    const randomReplacement = getRandomNumber(1, 9);
    const progression = arithmeticProgression(randomNumber, randomDifference, randomReplacement);
    const progQuestion = car(progression);
    const progAnswer = String(cdr(progression));
    return cons(progQuestion, progAnswer);
}
brainGame(getQuestionAnswer);