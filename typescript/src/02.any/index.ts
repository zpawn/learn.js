let apple: any = 0;
apple = '';
apple = true;

///

let data: any = JSON.parse('{ "id": "abc" }');
let id = data.id;

// если переменная объявлена, но не присвоено никакое значение, то компилятор выведет any

var apple; // any
let lemon; // any

class Fruit {
  name; // any
}

function weight(fruit) {} // fruit: any

// если функция возвращает значение принадлежащего к типу, который она не в
// состоянии вывести, то возвращаемый этой функцией тип данных будет выведен как тип Any
function sum(a, b) { return a + b } // function sum(a: any, b: any): any
