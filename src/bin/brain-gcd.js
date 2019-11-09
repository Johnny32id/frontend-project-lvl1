#!/usr/bin/env node
import { greetings, brainGame, brainRules } from '..';

import getQuestionAnswer from '../games/brain-gcd-game';

greetings();
brainRules('Find the greatest common divisor of given numbers.');


brainGame(getQuestionAnswer);
