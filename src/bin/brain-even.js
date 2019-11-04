#!/usr/bin/env node
import { brainEvenRules, greetings, brainGames, getRandomNumber } from '..';
greetings();
brainEvenRules();

brainGames = () => {
    const evenQuestion = getRandomNumber(1, 100);
    const evenAnswer = evenQuestion % 2 === 0 ? 'yes' : 'no';
    return brainGames(evenQuestion, evenAnswer)
}
