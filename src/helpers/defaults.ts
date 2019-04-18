import { Coordinate } from './../types/game';

export const SIZE: number = 5;
export const MAX_STEPS: number = 10;
export const COLORS: Array<string> = [
	'rgb(244,67,54)',
	'rgb(63,81,181)',
	'rgb(0,230,118)',
];
export const directions: Array<Coordinate> = [
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: -1, y: 0 }
];