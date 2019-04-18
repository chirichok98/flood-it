import { GameActionTypes, GameState, FLOOD_IT, RESET_GAME } from './../types/game';
import { floodIt } from '../helpers/algorithm';

export default (state: any = {}, action: GameActionTypes): GameState => {
	switch (action.type) {
		case FLOOD_IT: {
			const newBoard = floodIt(state.board, action.payload);
			return {
				...state,
				board: newBoard,
				step: state.step + 1,
				currentColor: action.payload,
			};
		}
		default:
			return state;
	}
};