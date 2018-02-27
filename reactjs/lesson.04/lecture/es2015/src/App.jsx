import {sayHello, object as namedObject} from "./exporter";

////

let x = 'foo';
if (true) {
    let x = 'bar';
    console.log('>>> inner:', x);
}
console.log('>>> outer:', x);

////

let a = 2;
let a = 4;

////

for (let i = 0; i < 10; i += 1) {
    //...
}

console.log(i);

////

sayHello();
console.log(namedObject);
