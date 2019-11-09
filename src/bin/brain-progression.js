#!/usr/bin/env node
import { greetings, brainGame, brainRules } from '..';

import getQuestionAnswer from '../games/brain-progression-game';

greetings();
brainRules('What number is missing in the progression?');


brainGame(getQuestionAnswer);
