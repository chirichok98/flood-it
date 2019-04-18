import * as React from 'react';
import { connect } from 'react-redux';

import Square from './Square';
import { State } from '../store';
import { floodIt } from '../actions/game';
import { Dispatch, bindActionCreators } from 'redux';

export interface BoardProps {
	board: Array<Array<string>>
	size: number;
	floodIt: Function;
}

export interface BoardState {
}

class Board extends React.Component<BoardProps, BoardState> {
	constructor(props: BoardProps) {
		super(props);
	}

	private renderBoard(): Array<JSX.Element> {
		const { size } = this.props;
		const board: Array<JSX.Element> = [];
		for (let x = 0; x < size; x++) {
			const rows: Array<JSX.Element> = [];
			for (let y = 0; y < size; y++) {
				rows.push(this.renderSquare(x, y));
			}
			board.push(
				<div key={`column_${x}`}>
					{rows}
				</div>
			);
		}
		return board;
	}

	private renderSquare(x: number, y: number): JSX.Element {
		const color = this.props.board[x][y];
		const key = `square_x${x}_y${y}`;
		return (
			<Square
				key={key}
				x={x}
				y={y}
				color={color}
				floodIt={() => this.props.floodIt(color)}
			/>
		);
	}

	public render() {
		const board = this.renderBoard();
		return (
			<div className="board">
				{board}
			</div>
		);
	}
}

const mapStateToProps = (state: State) => ({
	size: state.settings.size,
	board: state.game.board,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
	floodIt,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);