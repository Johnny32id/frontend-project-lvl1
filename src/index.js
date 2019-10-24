import readlineSync from "readline-sync";
const userName = readlineSync.question('What\'s your name?');
console.log('Hello, ' + userName);
export default userName;
