import * as React from 'react';
import Board from '../components/Board';

export interface GameProps {
}

export interface GameState {
}

export default class Game extends React.Component<GameProps, GameState> {
	constructor(props: GameProps) {
		super(props);
	}

	public render() {
		return (
			<Board />
		);
	}
}
