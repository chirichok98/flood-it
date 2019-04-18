export const generateBoard = (size: number, colors: Array<string>) => {
	const board: Array<Array<string>> = [];
	for (let x = 0; x < size; x++) {
		const row: Array<string> = []; 
		for (let y = 0; y < size; y++) {
			const color = colors[Math.floor(Math.random() * colors.length)];
			row.push(color);
		}
		board.push(row);
	}
	return {
		board,
		currentColor: board[0][0],
	};
}