import { floodIt } from './../actions/game';

export const FLOOD_IT = 'FLOOD_IT';
export const RESET_GAME = 'RESET_GAME';

export interface GameState {
	board: Array<Array<string>>
	currentColor: string;
	step: number;
	maxSteps: number;
}

export interface BoardState {
	size: number;
}

export interface BoardProps {
	size: number;
	floodIt: typeof floodIt;
}

export interface Coordinate {
	x: number;
	y: number;
}

interface FloodItAction {
	type: typeof FLOOD_IT;
	payload: string;
}

interface ResetGame {
	type: typeof RESET_GAME;
	payload: null;
}

export type GameActionTypes = FloodItAction | ResetGame;