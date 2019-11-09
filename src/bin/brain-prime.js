#!/usr/bin/env node
import { greetings, brainGame, brainRules } from '..';

import getQuestionAnswer from '../games/brain-prime-game';

greetings();
brainRules('Answer "yes" if given number is prime. Otherwise answer "no".');
brainGame(getQuestionAnswer);
