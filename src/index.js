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
    return Math.floor(Math.random() * (max - min)) + min;
};
export const questionAnswer = (question, answer) => cons(question, answer);
export const brainGame = () => {
    const name = userName();
    console.log('Hello, ' + name + '!');
    for (let counter = 0; counter <= 3; counter += 1) {
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        const arg = questionAnswer();
        console.log(`Question: ${car(arg)}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === cdr(arg)) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer;(. Correct answer was ${cdr(arg)}.\nLet's try again, ${name}`);
            break;
        };
    };
};