// @flow

// mixed - тип состоящий из всех возмжных типов во flow (но надо еще доказать что это определенный тип)
//       - смешанный тип о котором вы точно не знаете, что там

declare var s: mixed;
const foo: number = s / 8; // Error

const s1 = parseInt(s, 10);
const bar: number = s1 / 8;

///

declare var b: mixed;
b.toString(); // Error
if (b && typeof b == 'object') {
    b.toString()
}

// any - здесь все что угодно и flow не будет контролировать тип
declare var ss: any;
const baz: number = ss;
