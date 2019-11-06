import readlineSync from "readline-sync";
import {cons, car, cdr, toString} from "@hexlet/pairs";
export const greetings = () => (console.log("Welcome to the Brain Games!"));
export const brainRules = (rule) => (console.log(rule));
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
export const randomNumbersCalculation = (firstNumber, secondNumber, sign) => {
    if (sign === '+'){
        return firstNumber + secondNumber;
    } else if (sign === '-') {
        return firstNumber - secondNumber;
    } else return firstNumber * secondNumber;
};
export const commonDivisor = (firstNumber, secondNumber) => {
    let divisor = 1;
    for(let counter = 1; counter < firstNumber && counter < secondNumber; counter += 1) {
        if (firstNumber % counter === 0 && secondNumber % counter === 0) {
            divisor = counter;
        };
    } return divisor;
};
export const brainGame = (getQuestionAnswer) => {
    const name = userName();
    console.log('Hello, ' + name + '!');
    for (let counter = 0; counter <= 3; counter += 1) {
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        const questionAnswer = getQuestionAnswer();
        console.log(`Question: ${car(questionAnswer)}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === cdr(questionAnswer)) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer;(. Correct answer was ${cdr(questionAnswer)}.\nLet's try again, ${name}`);
            break;
        };
    };
};