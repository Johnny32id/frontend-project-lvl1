import readlineSync from "readline-sync";
export const greetings = console.log("Welcome to the Brain Games!");
export const brainEvenRules = console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")

export const userName = readlineSync.question('May I have your name?');
export const getRandomNumber = (1, 100) => {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
};
export const evenGame = readlineSync.question('Question:' + getRandomNumber) => {
    const correctAnswer = (getRandomNumber) => getRandomNumber % 2 === 0 ? 'yes' : 'no';
    for (counter = 0, counter < 2, counter + 1) {
        if (evenGame === correctAnswer) {
            console.log('Correct!')
        } else if (evenGame !== correctAnswer) {
            console.log(`${evenGame} is wrong answer;(. Correct answer was ${correctAnswer})`);
            break;
        }
    } console.log('Congratulations, ' + userName + '!');
}