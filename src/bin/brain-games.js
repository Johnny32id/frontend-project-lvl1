#! /usr/bin/env node
import { greetings, userName, askName, name } from '..'
greetings();
console.log(`Hello, ${userName()}!`);