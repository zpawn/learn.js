// @flow

let a: Array<number> = [1, 2, 3];
let b: number[] = [1, 2, 3];

let c: (number | null)[] = [1, 2, null, 3];
let d: (?number)[] = [1, 2, null, 3]; // массив чисел или null-ов
let e: ?number[] = [1, 2, null, 3]; // массив чисел либо null

// Кортедж - массив с фиксированным кол-вом элементов
let coords: [number, number, number] = [0.3, 0.5, 0.7];
let data: [string, number, number] = ['0.3', 0.5, 0.7];

declare var g: number[];

let value = a[5];
