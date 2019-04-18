import { clearColors, setSize, removeColor, addColor } from "../actions/settings";

export const SET_SIZE = 'SET_SIZE';
export const CLEAR_COLORS = 'CLEAR_COLORS';
export const ADD_COLOR = 'ADD_COLOR';
export const REMOVE_COLOR = 'REMOVE_COLOR';

export interface SettingsState {
	size: number;
	colors: Array<string>;
};

export interface SettingsProps {
	size: number;
	colors: Array<string>;
	setSize: typeof setSize;
	clearColors: typeof clearColors;
	addColor: typeof addColor;
	removeColor: typeof removeColor;
}

interface SetSizeAction {
	type: typeof SET_SIZE;
	payload: number;
};

interface ClearColorsActions {
	type: typeof CLEAR_COLORS;
	payload: null;
}

interface AddColorAction {
	type: typeof ADD_COLOR;
	payload: string;
}

interface RemoveColorAction {
	type: typeof REMOVE_COLOR;
	payload: string;
}

export type SettingsActionTypes = SetSizeAction | ClearColorsActions |
	AddColorAction | RemoveColorAction;