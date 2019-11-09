#!/usr/bin/env node
import { greetings, brainGame, brainRules } from '..';

import getQuestionAnswer from '../games/brain-even-game';

greetings();
brainRules('Answer "yes" if the number is even, otherwise answer "no".');
brainGame(getQuestionAnswer);
