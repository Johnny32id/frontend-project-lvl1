import readlineSync from "readline-sync";
export const greetings = console.log("Welcome to the Brain Games!");

export const userName = readlineSync.question('What\'s your name?');
console.log('Hello, ' + userName);
