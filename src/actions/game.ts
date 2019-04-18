import { FLOOD_IT, RESET_GAME } from './../types/game';
import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';

const floodItAction = (color: string) => ({
	type: FLOOD_IT,
	payload: color,
});

const resetGameAction = () => ({
	type: RESET_GAME,
	payload: null as any,
});

export const floodIt = (color: string) =>
	(dispatch: Dispatch) => dispatch(floodItAction(color));

export const resetGame = () => 
	(dispatch: Dispatch) => dispatch(resetGameAction());