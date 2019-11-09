#! /usr/bin/env node
import { greetings, askUserName } from '..';

greetings();
console.log(`Hello, ${askUserName()}!`);
