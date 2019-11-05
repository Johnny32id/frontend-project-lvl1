#!/usr/bin/env node
import { brainEvenRules, greetings, brainGame, getRandomNumber, questionAnswer } from '../..';
import {cons, car, cdr, toString} from "@hexlet/pairs";
greetings();
brainEvenRules();
const evenQuestion = getRandomNumber(1, 100);
const evenAnswer = evenQuestion % 2 === 0 ? "yes" : "no";
questionAnswer(evenQuestion, evenAnswer);
brainGame();
