import { combineReducers } from 'redux';

import { State } from './../store';
import settings from './settings';
import game from './game';

export default combineReducers<State>({
	settings,
	game,
});