import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';

import {
	SET_SIZE,
	CLEAR_COLORS,
	ADD_COLOR,
	REMOVE_COLOR,
	SettingsActionTypes,
	SettingsState,
} from "../types/settings";

const setSizeAction = (size: number): SettingsActionTypes => ({
	type: SET_SIZE,
	payload: size,
});
const clearColorsAction = (): SettingsActionTypes => ({
	type: CLEAR_COLORS,
	payload: null,
});
const addColorAction = (color: string): SettingsActionTypes => ({
	type: ADD_COLOR,
	payload: color,
});
const removeColorAction = (color: string): SettingsActionTypes => ({
	type: REMOVE_COLOR,
	payload: color,
});

export const setSize = (size: number): ThunkAction<void, SettingsState, null, Action<SettingsActionTypes>> =>
	(dispatch: Dispatch) => dispatch(setSizeAction(size));
export const clearColors = (): ThunkAction<void, SettingsState, null, Action<SettingsActionTypes>> =>
	(dispatch: Dispatch) => dispatch(clearColorsAction());
export const addColor = (color: string): ThunkAction<void, SettingsState, null, Action<SettingsActionTypes>> =>
	(dispatch: Dispatch) => dispatch(addColorAction(color));
export const removeColor = (color: string): ThunkAction<void, SettingsState, null, Action<SettingsActionTypes>> =>
	(dispatch: Dispatch) => dispatch(removeColorAction(color));