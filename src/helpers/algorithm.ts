import { directions } from './defaults';
import { Coordinate } from './../types/game';

export const floodIt = (board: Array<Array<string>>, color: string): Array<Array<string>> => {
	let b = JSON.parse(JSON.stringify(board));

	const oldColor = b[0][0];
	const stack: Array<Coordinate> = [{ x: 0, y: 0 }];
	const visited: Array<Coordinate> = [];

	while (stack.length) {
		const sq = stack.pop();
		b[sq.x][sq.y] = color;
		visited.push(sq);
		directions.forEach((dir: Coordinate) => {
			const x = sq.x + dir.x;
			const y = sq.y + dir.y;
			if (checkBorder(x, y, b.length)) {
				const elementColor = b[x][y];
				if (!floodElement(oldColor, elementColor))
					return;
				if (!visited.find(obj => obj.x === x && obj.y === y))
					stack.push({ x, y });
			}
		});
	}
	return b;
}

function floodElement(oldColor: string, elementColor: string): boolean {
	return elementColor === oldColor;
}

function checkBorder(x: number, y: number, size: number): boolean {
	return y >= 0 && y < size && x >= 0 && x < size;
}