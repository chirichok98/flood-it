import * as React from 'react';

interface SquareProps {
	x: number;
	y: number;
	color: string;
	floodIt: Function;
}

const Square: React.FunctionComponent<SquareProps> = (props) => {
	const { color, x, y } = props;
	const style = { background: color };
	return (
		<button
			className="square"
			onClick={() => props.floodIt(x, y)}
			style={style}>
		</button>
	);
};

export default Square;