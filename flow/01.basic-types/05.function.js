// @flow

function sum (a: number, b: number): number {
    return a / b
}
sum(2, 3);

// опциональный второй параметр
const arrowF = (a: number, b?: number): number => {
    return 5
};
arrowF(1, 'foo');

const fnRest = (a: number, b: number, ...rest: Array<number>): number => {
    return 10
};

// Клмов не рекомендует
function proccess (cb: Function) { cb() }

// лучше так
function _proccess (cb: (err: Object) => void) {
    cb({ err: 's' });
}
_proccess((a: {}) => {
    console.log(a)
});

