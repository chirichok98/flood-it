import {
	SET_SIZE,
	CLEAR_COLORS,
	ADD_COLOR,
	REMOVE_COLOR,
	SettingsState,
	SettingsActionTypes,
} from '../types/settings';

export default (state: any = {}, action: SettingsActionTypes): SettingsState => {
	switch (action.type) {
		case SET_SIZE:
			return {
				...state,
				size: action.payload,
			};
		case CLEAR_COLORS:
			return {
				...state,
				colors: [],
			};
		case ADD_COLOR:
			return {
				...state,
				// check identical colors
				colors: state.colors.concat(action.payload),
			};
		case REMOVE_COLOR: {
			const colors = state.colors.filter((item: string) => item !== action.payload);
			return {
				...state,
				colors,
			};
		}
		default:
			return state;
	}
};