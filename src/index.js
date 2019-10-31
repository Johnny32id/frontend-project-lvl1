import readlineSync from "readline-sync";
export const greetings = () => (console.log("Welcome to the Brain Games!"));
export const brainEvenRules = () => (console.log("Answer \"yes\" if the number is even, otherwise answer \"no\"."));
export const userName = () => {
    const askName = (readlineSync.question('May I have your name?'));
    return askName;
};
export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
export const evenGame = () => {
    const name = userName();
    console.log('Hello, ' + name + '!');
    for (let counter = 0; counter <= 3; counter += 1) {
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        const randomNumber = getRandomNumber(1, 100);
        console.log('Question:' + randomNumber);
        const answer = readlineSync.question('Your answer: ');
        const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`);
            break;
        };
    };
};