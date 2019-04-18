import * as React from 'react';
import { connect } from 'react-redux';

import {setSize, clearColors, addColor, removeColor} from '../actions/settings';
import { State } from '../store';
import { SettingsProps, SettingsState } from '../types/settings';

class Settings extends React.Component<SettingsProps, SettingsState> {
	constructor(props: SettingsProps) {
		super(props);
	}

	public render() {
		return (
			<div>
				<div>Size: {this.props.size}</div>
				<div>Colors: {this.props.colors}</div>
			</div>
		);
	}
}

const mapStateToProps = (state: State): SettingsState => ({ ...state.settings });
const mapDispatchToProps = () => ({
	setSize: (size: number) => setSize(size),
	clearColors: () => clearColors(),
	addColor: (color: string) => addColor(color),
	removeColor: (color: string) => removeColor(color),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);