import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import { SettingsState } from './types/settings';
import { GameState } from './types/game';
import { SIZE, COLORS, MAX_STEPS } from './helpers/defaults';
import { generateBoard } from './helpers/generator';

export interface State {
	settings: SettingsState;
	game: GameState;
}

const generatedBoard = generateBoard(SIZE, COLORS);

export const initialState: State = {
	settings: {
		size: SIZE,
		colors: COLORS,
	},
	game: {
		...generatedBoard,
		step: 0,
		maxSteps: MAX_STEPS,
	}
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);

}