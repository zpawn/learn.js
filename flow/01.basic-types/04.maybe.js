// @flow

// Тип может быть, а может и не быть
let s: ?string = '123';

s = null;

if (s) {
    console.log(s.includes('foo'))
}
