import readlineSync from "readline-sync";
import {cons, car, cdr, toString} from "@hexlet/pairs";
export const greetings = () => (console.log("Welcome to the Brain Games!"));
export const brainEvenRules = () => (console.log("Answer \"yes\" if the number is even, otherwise answer \"no\"."));
export const brainCalcRules = () => console.log('What is the result of the experssion?');
export const userName = () => {
    const askName = (readlineSync.question('May I have your name?'));
    return askName;
};

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getRandomSign = () => {
    const random = getRandomNumber(1, 3);
    if(random === 1) {
        return '+';
    } else if (random === 2) {
        return '-';
    } else return '*';
};
export const brainGame = (questionAnswer) => {
    const name = userName();
    console.log('Hello, ' + name + '!');
    for (let counter = 0; counter <= 3; counter += 1) {
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        const argQA = questionAnswer;
        console.log(`Question: ${car(argQA)}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === cdr(argQA)) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer;(. Correct answer was ${cdr(argQA)}.\nLet's try again, ${name}`);
            break;
        };
    };
};