#!/usr/bin/env node
import { greetings, brainGame, brainRules } from '..';

import getQuestionAnswer from '../games/brain-calc-game';

greetings();
brainRules('What is the result of the expression?');

brainGame(getQuestionAnswer);
