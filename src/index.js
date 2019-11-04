import readlineSync from "readline-sync";
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
export const brainGames = (gameQuestion, gameAnswer) => {
    const name = userName();
    console.log('Hello, ' + name + '!');
    for (let counter = 0; counter <= 3; counter += 1) {
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        console.log(`Question: ${gameQuestion}`);
        const correctAnswer = gameAnswer;
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}`);
            break;
        };
    };
};